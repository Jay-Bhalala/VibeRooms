const ThemeModel = require('../models/Theme');

exports.getThemes = async () => {
  return ThemeModel.find();
};

exports.setThemeForUser = async (userId, themeId) => {
  const user = await UserModel.findById(userId);
  user.theme = themeId;
  await user.save();
  return user;
};