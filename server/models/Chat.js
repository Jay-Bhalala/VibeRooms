const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  message: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', chatSchema);