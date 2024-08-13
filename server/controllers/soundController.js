const SoundModel = require('../models/Sound');

exports.getSounds = async (req, res) => {
  try {
    const sounds = await SoundModel.find({});
    res.send(sounds);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.playSound = async (req, res) => {
  const { soundId } = req.params;
  try {
    const sound = await SoundModel.findById(soundId);
    if (!sound) {
      return res.status(404).send();
    }
    res.send(sound);
  } catch (error) {
    res.status(500).send(error);
  }
};