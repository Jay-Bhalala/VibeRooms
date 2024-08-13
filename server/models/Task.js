const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dueDate: { type: Date }
});

module.exports = mongoose.model('Task', taskSchema);