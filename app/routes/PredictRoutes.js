const express = require("express");
const controller = require("../controllers/PredictController");
const auth = require("../middlewares/auth");
const router = express.Router();

// predict
router.post("/", auth.signUpAuthorization, controller.predictData);

module.exports = router;
