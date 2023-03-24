const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./app/routes/UserRoutes");
const doctorRoutes = require("./app/routes/DoctorRoutes");
const bookingRoutes = require("./app/routes/BookingRoutes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

async function connect() {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("-->" + error.message);
  }
}

const URL = process.env.URL;
const PORT = process.env.PORT;

connect();

app.use("/user",userRoutes)
app.use("/doctor",doctorRoutes)
app.use("/booking",bookingRoutes)

app.listen(PORT, ()=>{
  console.log("Server started!!");
})
