const ThemeModel = require('../models/Theme');

exports.getThemes = async (req, res) => {
  try {
    const themes = await ThemeModel.find({});
    res.send(themes);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.setTheme = async (req, res) => {
  try {
    const { userId, themeId } = req.body;
    const user = await UserModel.findById(userId);
    user.theme = themeId;
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};