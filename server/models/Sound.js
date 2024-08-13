const mongoose = require('mongoose');
const { Schema } = mongoose;

const soundSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true,
    default: 'https://freesound.org/viberooms.mp3'
  }
});

module.exports = mongoose.model('Sound', soundSchema);