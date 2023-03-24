const express = require("express");
const controller = require("../controllers/BookingController");
const auth = require("../middlewares/auth");
const router = express.Router();

// Save booking details
router.post("/", auth.userAuthorization, controller.saveBooking);

// Get Booking details -> this will be used when user will click on a particular meeting
router.get("/", auth.userAuthorization, controller.getBooking);

// Get all bookings   -> this can we used for listing of the all the current/previous bookings details
router.get("/:email", auth.userAuthorization, controller.getBookingsByEmail);

module.exports = router;
