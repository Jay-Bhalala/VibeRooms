const UserModel = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};