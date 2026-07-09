const express = require('express');
const { getTemples, getTemple, createTemple, updateTemple, deleteTemple, toggleTempleStatus } = require('../controllers/templeController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getTemples)
  .post(protect, authorize('ADMIN', 'ORGANIZER'), createTemple);

router.route('/:id')
  .get(getTemple)
  .put(protect, authorize('ADMIN', 'ORGANIZER'), updateTemple)
  .delete(protect, authorize('ADMIN'), deleteTemple);

router.route('/:id/toggle')
  .put(protect, authorize('ADMIN'), toggleTempleStatus);

module.exports = router;
