const BookingModel = require("../db/models/BookingModel")

// it's useless currently no use   -> we will use a booking id for it.
const getBooking = async (req, res) => {
  try {
    const booking = await BookingModel.find({_id : req.bookingId});
    res.status(200).send(booking);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};


const getBookingsByEmail = async (req, res) => {
  try {
    const bookings = await BookingModel.find({email : req.params.email});
    res.status(200).send(bookings);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const saveBooking = async (req, res) => {
    const newBooking = new BookingModel(req.body);
  try {
    await newBooking.save();
    res.status(200).send({ ...req.body});
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
    getBooking,
    getBookingsByEmail,
    saveBooking
};
