const express = require('express');
const { getDashboardStats, getAllUsers, updateUserRole, deleteUser, getAllDonations } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Require Admin Role for all routes in this file
router.use(protect);
router.use(authorize('ADMIN'));

router.route('/stats').get(getDashboardStats);

router.route('/users')
  .get(getAllUsers);

router.route('/users/:id/role')
  .put(updateUserRole);

router.route('/users/:id')
  .delete(deleteUser);

router.route('/donations')
  .get(getAllDonations);

module.exports = router;
