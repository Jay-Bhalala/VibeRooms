const SoundModel = require('../models/Sound');

exports.getSoundById = async (soundId) => {
  return SoundModel.findById(soundId);
};

exports.getAllSounds = async () => {
  return SoundModel.find();
};