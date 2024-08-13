const { body, validationResult } = require('express-validator');

exports.userValidationRules = function () {
  return [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
  ];
};

exports.validate = function (req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(422).json({ errors: errors.array() });
};