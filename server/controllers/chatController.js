const ChatModel = require('../models/Chat');

exports.postMessage = async (req, res) => {
  try {
    const message = await ChatModel.create({
      message: req.body.message,
      user: req.body.userId,
      timestamp: new Date(),
    });
    res.status(201).send(message);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await ChatModel.find({});
    res.send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
};