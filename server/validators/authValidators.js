const { check, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(errors.array().map(e => e.msg).join(', '));
    error.statusCode = 400;
    return next(error);
  }
  next();
};

const registerValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  validateRequest
];

const loginValidator = [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  validateRequest
];

module.exports = {
  registerValidator,
  loginValidator
};
