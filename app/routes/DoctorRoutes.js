const express = require("express");
const controller = require("../controllers/DoctorController");
const auth = require("../middlewares/auth");
const router = express.Router();

// Save doctor details
router.post("/", auth.signUpAuthorization, controller.saveDoctor);

// Get own details
router.get("/", auth.userAuthorization, controller.getDoctor);

// Get all doctors
router.get("/all", auth.userAuthorization, controller.getDoctors);

// Get user details
router.get("/:email", auth.userAuthorization, controller.getDoctorByEmail);

module.exports = router;
