const TaskModel = require('../models/Task');

exports.createTask = async (taskData) => {
  const task = new TaskModel(taskData);
  return task.save();
};

exports.getTasksByUser = async (userId) => {
  return TaskModel.find({ user: userId });
};

exports.updateTask = async (taskId, updateData) => {
  return TaskModel.findByIdAndUpdate(taskId, updateData, { new: true });
};

exports.deleteTask = async (taskId) => {
  return TaskModel.findByIdAndDelete(taskId);
};