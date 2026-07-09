const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  templeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Temple',
    required: true
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, 'Please add a rating between 1 and 5']
  },
  review: {
    type: String,
    required: [true, 'Please add a review text']
  }
}, { timestamps: true });

// Prevent user from submitting more than one review per temple
reviewSchema.index({ templeId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Review', reviewSchema);
