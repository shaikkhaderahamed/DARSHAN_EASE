const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  razorpayOrderId: {
    type: String,
    required: true
  },
  razorpayPaymentId: {
    type: String
  },
  razorpaySignature: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['CREATED', 'SUCCESS', 'FAILED'],
    default: 'CREATED'
  },
  type: {
    type: String,
    enum: ['BOOKING', 'DONATION'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
