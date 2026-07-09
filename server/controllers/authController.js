const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, role, phone, address } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      const error = new Error('User already exists');
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
      phone,
      address
    });

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      }
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.matchPassword(password))) {
      const error = new Error('Invalid email or password');
      error.statusCode = 401;
      return next(error);
    }

    res.json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      }
    });
  } catch (error) {
    next(error);
  }
};

const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate('wishlist bookingHistory donationHistory');
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      return next(error);
    }
    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile
};
