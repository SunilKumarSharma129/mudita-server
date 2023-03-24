const express = require("express");
const controller = require("../controllers/UserController");
const auth = require("../middlewares/auth");
const router = express.Router();

// Save user details
router.post("/", controller.saveUser);

// Get own details
router.get("/", auth.userAuthorization, controller.getUser);

// Get user details
router.get("/:userEmail", auth.userAuthorization, controller.getUserByEmail);

module.exports = router;
