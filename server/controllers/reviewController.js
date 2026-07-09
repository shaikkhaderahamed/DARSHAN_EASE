const Review = require('../models/Review');
const Temple = require('../models/Temple');
const Booking = require('../models/Booking');

// @desc    Add a review
// @route   POST /api/reviews
// @access  Private
const addReview = async (req, res, next) => {
  try {
    const { templeId, rating, review: reviewText } = req.body;
    
    // Check if user has a confirmed/completed booking for this temple
    const hasBooked = await Booking.findOne({
      userId: req.user.id,
      templeId,
      bookingStatus: { $in: ['CONFIRMED', 'COMPLETED'] }
    });

    if (!hasBooked) {
      const error = new Error('Only users with a confirmed booking can review this temple.');
      error.statusCode = 403;
      return next(error);
    }

    // Check if user already reviewed
    const existingReview = await Review.findOne({ templeId, userId: req.user.id });
    if (existingReview) {
      const error = new Error('You have already reviewed this temple.');
      error.statusCode = 400;
      return next(error);
    }

    const reviewObj = await Review.create({
      templeId,
      userId: req.user.id,
      rating: Number(rating),
      review: reviewText
    });

    // Update temple averages
    await updateTempleAverageRating(templeId);

    res.status(201).json({ success: true, data: reviewObj });
  } catch (error) {
    next(error);
  }
};

// @desc    Get temple reviews
// @route   GET /api/reviews/temple/:templeId
// @access  Public
const getTempleReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ templeId: req.params.templeId })
      .populate('userId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
// @access  Private (User/Admin)
const deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      const error = new Error('Review not found');
      error.statusCode = 404;
      return next(error);
    }

    // Ensure user owns the review or is admin
    if (review.userId.toString() !== req.user.id && req.user.role !== 'ADMIN') {
      const error = new Error('Not authorized to delete this review');
      error.statusCode = 403;
      return next(error);
    }

    await review.deleteOne();
    await updateTempleAverageRating(review.templeId);

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};

// Helper function
const updateTempleAverageRating = async (templeId) => {
  const obj = await Review.aggregate([
    { $match: { templeId: templeId } },
    { $group: { _id: '$templeId', averageRating: { $avg: '$rating' }, count: { $sum: 1 } } }
  ]);

  if (obj.length > 0) {
    await Temple.findByIdAndUpdate(templeId, {
      ratings: Math.round(obj[0].averageRating * 10) / 10,
      reviewsCount: obj[0].count
    });
  } else {
    await Temple.findByIdAndUpdate(templeId, { ratings: 0, reviewsCount: 0 });
  }
};

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Private/Admin
const getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find()
      .populate('userId', 'name email')
      .populate('templeId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: reviews.length, data: reviews });
  } catch (error) {
    next(error);
  }
};

module.exports = { addReview, getTempleReviews, deleteReview, getAllReviews };
