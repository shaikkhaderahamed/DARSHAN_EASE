const express = require('express');
const { upload } = require('../config/cloudinary');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private/Admin or Organizer
router.post('/', protect, authorize('ADMIN', 'ORGANIZER'), upload.single('image'), (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error('No image uploaded');
      error.statusCode = 400;
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: req.file.path // Cloudinary URL
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Upload multiple images (gallery)
// @route   POST /api/upload/multiple
// @access  Private/Admin or Organizer
router.post('/multiple', protect, authorize('ADMIN', 'ORGANIZER'), upload.array('images', 5), (req, res, next) => {
  try {
    if (!req.files || req.files.length === 0) {
      const error = new Error('No images uploaded');
      error.statusCode = 400;
      return next(error);
    }

    const urls = req.files.map(file => file.path);

    res.status(200).json({
      success: true,
      data: urls
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
