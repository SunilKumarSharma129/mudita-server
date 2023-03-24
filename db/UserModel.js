const mongoose = require("mongoose");

const TempModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  avatar: {
    type: String,
    required: false,
    trim: true,
  },
  age: {
    type: String,
    required: true,
    trim: true,
  }
});

const UserModel = mongoose.model("userModel", TempModel);

module.exports = UserModel;
