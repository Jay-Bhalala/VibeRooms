const TaskModel = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({ user: req.user.id });
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createTask = async (req, res) => {
  try {
    const newTask = new TaskModel({
      description: req.body.description,
      user: req.user.id,
      completed: false
    });
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.taskId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};