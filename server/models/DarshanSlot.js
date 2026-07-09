const mongoose = require('mongoose');

const darshanSlotSchema = new mongoose.Schema({
  templeId: { type: mongoose.Schema.ObjectId, ref: 'Temple', required: true },
  darshanType: { type: String, default: 'General' },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  totalCapacity: { type: Number, required: true },
  bookedSeats: { type: Number, default: 0 },
  availableSeats: { type: Number, required: true },
  ticketPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['AVAILABLE', 'FULL', 'CANCELLED'], default: 'AVAILABLE' }
}, { timestamps: true });

// Prevent duplicate slots
darshanSlotSchema.index({ templeId: 1, date: 1, startTime: 1, darshanType: 1 }, { unique: true });

module.exports = mongoose.model('DarshanSlot', darshanSlotSchema);
