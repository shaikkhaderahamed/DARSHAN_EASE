const Booking = require('../models/Booking');
const DarshanSlot = require('../models/DarshanSlot');
const Payment = require('../models/Payment');
const Razorpay = require('razorpay');
const QRCode = require('qrcode');
const crypto = require('crypto');
const NotificationService = require('../services/NotificationService');

const createBooking = async (req, res, next) => {
  try {
    const { templeId, slotId, noOfPersons, devoteeDetails, totalAmount } = req.body;

    const slot = await DarshanSlot.findById(slotId);
    if (!slot || slot.availableSeats < noOfPersons) {
      const error = new Error('Not enough seats available');
      error.statusCode = 400;
      return next(error);
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_mock',
      key_secret: process.env.RAZORPAY_KEY_SECRET || 'mock_secret',
    });

    const options = {
      amount: totalAmount * 100,
      currency: "INR",
      receipt: `receipt_order_${Math.random() * 1000}`
    };

    let order;
    try {
       order = await instance.orders.create(options);
    } catch(err) {
       order = { id: 'order_mock_' + Date.now(), amount: options.amount };
    }

    const payment = await Payment.create({
      userId: req.user.id,
      razorpayOrderId: order.id,
      amount: totalAmount,
      type: 'BOOKING'
    });

    const booking = await Booking.create({
      userId: req.user.id,
      templeId,
      slotId,
      noOfPersons,
      devoteeDetails,
      totalAmount,
      paymentId: payment._id
    });

    res.status(201).json({
      success: true,
      data: booking,
      orderId: order.id,
      amount: order.amount
    });
  } catch (error) {
    next(error);
  }
};

const verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

    const booking = await Booking.findById(bookingId).populate('templeId').populate('slotId');
    if (!booking) {
      const error = new Error('Booking not found');
      error.statusCode = 404;
      return next(error);
    }

    if (booking.bookingStatus === 'CONFIRMED') {
      return res.status(200).json({ success: true, message: 'Booking already confirmed', data: booking });
    }

    const payment = await Payment.findById(booking.paymentId);
    payment.razorpayPaymentId = razorpay_payment_id || 'mock_pay_id';
    payment.razorpaySignature = razorpay_signature || 'mock_sig';
    payment.status = 'SUCCESS';
    await payment.save();

    const ticketNumber = 'TKT-' + crypto.randomBytes(4).toString('hex').toUpperCase();
    
    // Generate QR Code containing ticket number
    const qrCodeDataUrl = await QRCode.toDataURL(ticketNumber);

    booking.bookingStatus = 'CONFIRMED';
    booking.paymentStatus = 'PAID';
    booking.ticketNumber = ticketNumber;
    booking.qrCodeUrl = qrCodeDataUrl;
    await booking.save();

    const slot = await DarshanSlot.findById(booking.slotId);
    slot.availableSeats -= booking.noOfPersons;
    slot.bookedSeats += booking.noOfPersons;
    if (slot.availableSeats <= 0) slot.status = 'FULL';
    await slot.save();

    // Send Notification
    await NotificationService.sendBookingConfirmation(req.user, booking, booking.templeId);

    res.status(200).json({ success: true, message: 'Booking confirmed', data: booking });
  } catch (error) {
    next(error);
  }
};

const getMyBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).populate('templeId', 'name city featuredImage').populate('slotId');
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    next(error);
  }
};

const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate('templeId', 'name city').populate('userId', 'name email').populate('slotId');
    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    next(error);
  }
};

const cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('templeId');
    if (!booking) {
      const error = new Error('Booking not found');
      error.statusCode = 404;
      return next(error);
    }

    if (booking.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to cancel this booking');
      error.statusCode = 403;
      return next(error);
    }

    if (booking.bookingStatus === 'CANCELLED') {
      const error = new Error('Booking is already cancelled');
      error.statusCode = 400;
      return next(error);
    }

    // Restore seats
    const slot = await DarshanSlot.findById(booking.slotId);
    if (slot) {
      slot.availableSeats += booking.noOfPersons;
      slot.bookedSeats -= booking.noOfPersons;
      if (slot.availableSeats > 0) slot.status = 'AVAILABLE';
      await slot.save();
    }

    booking.bookingStatus = 'CANCELLED';
    await booking.save();

    await NotificationService.sendBookingCancellation(req.user, booking, booking.templeId);

    res.status(200).json({ success: true, message: 'Booking cancelled successfully', data: booking });
  } catch (error) {
    next(error);
  }
};

module.exports = { createBooking, verifyPayment, getMyBookings, getAllBookings, cancelBooking };
