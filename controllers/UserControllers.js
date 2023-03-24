const UserModel = require("../db/models/UserModel")
const admin = require("../config/firebase-config")

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({email : req.email});
    console.log(user.toString());
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const user = await UserModel.find({email : req.params.email});
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const saveUser = async (req, res) => {
    const newUser = new UserModel(req.body);
  try {
    await newUser.save();
    res.status(200).send({ ...req.body});
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};


module.exports = {
    getUser,
    getUserByEmail,
    saveUser,
};
