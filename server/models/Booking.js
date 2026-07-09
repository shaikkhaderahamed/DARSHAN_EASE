const mongoose = require('mongoose');

const devoteeDetailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  idProofType: { type: String, required: true },
  idProofNumber: { type: String, required: true }
});

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  templeId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Temple',
    required: true
  },
  slotId: {
    type: mongoose.Schema.ObjectId,
    ref: 'DarshanSlot',
    required: true
  },
  noOfPersons: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  devoteeDetails: [devoteeDetailSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  bookingStatus: {
    type: String,
    enum: ['PENDING', 'CONFIRMED', 'CANCELLED'],
    default: 'PENDING'
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'PAID', 'FAILED', 'REFUNDED'],
    default: 'PENDING'
  },
  qrCodeUrl: {
    type: String
  },
  ticketNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  paymentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Payment'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
