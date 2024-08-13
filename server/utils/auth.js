const jwt = require('jsonwebtoken');

exports.generateToken = function (user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
};

exports.verifyToken = function (token) {
  return jwt.verify(token, process.env.JWT_SECRET);
};