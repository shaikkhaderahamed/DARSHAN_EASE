const express = require('express');
const { createBooking, verifyPayment, getMyBookings, getAllBookings, cancelBooking } = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createBooking)
  .get(protect, authorize('ADMIN', 'ORGANIZER'), getAllBookings);

router.route('/mybookings')
  .get(protect, getMyBookings);

router.route('/verify')
  .post(protect, verifyPayment);

router.route('/:id/cancel')
  .put(protect, cancelBooking);

module.exports = router;
