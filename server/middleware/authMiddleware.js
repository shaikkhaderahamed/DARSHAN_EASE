const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      const err = new Error('Not authorized, token failed');
      err.statusCode = 401;
      return next(err);
    }
  }

  if (!token) {
    const err = new Error('Not authorized, no token');
    err.statusCode = 401;
    return next(err);
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      const err = new Error(`User role ${req.user.role} is not authorized to access this route`);
      err.statusCode = 403;
      return next(err);
    }
    next();
  };
};

module.exports = { protect, authorize };
