const express = require('express');
const { addReview, getTempleReviews, deleteReview, getAllReviews } = require('../controllers/reviewController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, addReview)
  .get(protect, authorize('ADMIN'), getAllReviews);

router.route('/:id')
  .delete(protect, deleteReview);

router.route('/temple/:templeId')
  .get(getTempleReviews);

module.exports = router;
