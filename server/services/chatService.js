const ChatModel = require('../models/Chat');

exports.postMessage = async (messageData) => {
  const message = new ChatModel(messageData);
  return message.save();
};

exports.getMessages = async () => {
  return ChatModel.find();
};