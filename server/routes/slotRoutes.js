const express = require('express');
const { getSlots, getAllSlots, createSlot, updateSlot, deleteSlot } = require('../controllers/slotController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(protect, authorize('ADMIN', 'ORGANIZER'), getAllSlots)
  .post(protect, authorize('ADMIN', 'ORGANIZER'), createSlot);

router.route('/:id')
  .put(protect, authorize('ADMIN', 'ORGANIZER'), updateSlot)
  .delete(protect, authorize('ADMIN', 'ORGANIZER'), deleteSlot);

// This route gets slots for a specific temple (public)
router.route('/temple/:templeId')
  .get(getSlots);

module.exports = router;
