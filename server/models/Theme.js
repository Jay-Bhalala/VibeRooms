const mongoose = require('mongoose');
const { Schema } = mongoose;

const themeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  colors: [String] // color codes
});

module.exports = mongoose.model('Theme', themeSchema);