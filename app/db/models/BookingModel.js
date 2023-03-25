const mongoose = require("mongoose");

const TempModel = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    trim: true,
  },
  doctorEmail: {
    type: String,
    required: true,
    trim: true,
  },
  fees: {
    type: String,
    required: true,
    trim: true,
  },
  surveyData: {
    type: String,
    required: false,
    trim: true,
  },
});

const BookingModel = mongoose.model("bookingModel", TempModel);

module.exports = BookingModel;
