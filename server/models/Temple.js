const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  state: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  history: { type: String, default: '' },
  deity: { type: String, required: true },
  category: { type: String, default: 'General' },
  latitude: { type: Number },
  longitude: { type: Number },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  dressCode: { type: String, default: 'Traditional Wear' },
  facilities: { type: [String], default: [] },
  galleryImages: { type: [String], default: [] },
  featuredImage: { type: String, default: '' },
  ratings: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  organizerId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Temple', templeSchema);
