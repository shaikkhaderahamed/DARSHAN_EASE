const Temple = require('../models/Temple');
const DarshanSlot = require('../models/DarshanSlot');
const Booking = require('../models/Booking');
const User = require('../models/User');
const Payment = require('../models/Payment');

// @desc    Get Admin Dashboard Stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getDashboardStats = async (req, res, next) => {
  try {
    const totalTemples = await Temple.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalBookings = await Booking.countDocuments();
    
    // Calculate total revenue from SUCCESS payments
    const payments = await Payment.aggregate([
      { $match: { status: 'SUCCESS' } },
      { $group: { _id: null, totalRevenue: { $sum: '$amount' } } }
    ]);
    
    const totalRevenue = payments.length > 0 ? payments[0].totalRevenue : 0;

    // Recent Bookings
    const recentBookings = await Booking.find()
      .populate('templeId', 'name')
      .populate('userId', 'name email')
      .sort('-createdAt')
      .limit(5);

    // Bookings trend over last 7 days
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);
    
    const bookingsTrend = await Booking.aggregate([
      { $match: { createdAt: { $gte: last7Days } } },
      { 
        $group: { 
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, 
          count: { $sum: 1 } 
        } 
      },
      { $sort: { _id: 1 } }
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalTemples,
        totalUsers,
        totalBookings,
        totalRevenue,
        recentBookings,
        bookingsTrend
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select('-password').sort('-createdAt');
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
const updateUserRole = async (req, res, next) => {
  try {
    const { role } = req.body;
    const user = await User.findById(req.params.id);
    
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    user.role = role;
    await user.save();
    
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    
    await user.deleteOne();
    
    res.status(200).json({ success: true, message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};

const Donation = require('../models/Donation');

// @desc    Get all donations
// @route   GET /api/admin/donations
// @access  Private/Admin
const getAllDonations = async (req, res, next) => {
  try {
    const donations = await Donation.find()
      .populate('userId', 'name email')
      .populate('templeId', 'name')
      .sort('-createdAt');
      
    res.status(200).json({ success: true, count: donations.length, data: donations });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboardStats,
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllDonations
};
