const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { registerValidator, loginValidator } = require('../validators/authValidators');

const router = express.Router();

router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
