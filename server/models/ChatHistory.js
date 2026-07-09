const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  }
}, { timestamps: true }); // timestamps adds createdAt (timestamp) automatically

module.exports = mongoose.model('ChatHistory', chatHistorySchema);
