const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./app/routes/UserRoute");

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

app.listen(PORT, ()=>{
  console.log("Server started!!");
})
