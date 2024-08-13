const UserModel = require('../models/User');

exports.createUser = async (userData) => {
  const user = new UserModel(userData);
  return user.save();
};

exports.getUserById = async (userId) => {
  return UserModel.findById(userId);
};

exports.updateUser = async (userId, updateData) => {
  return UserModel.findByIdAndUpdate(userId, updateData, { new: true });
};

exports.deleteUser = async (userId) => {
  return UserModel.findByIdAndDelete(userId);
};