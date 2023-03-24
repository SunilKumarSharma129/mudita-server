const DoctorModel = require("../db/models/DoctorModel")

// it's useless currently no use
const getDoctor = async (req, res) => {
  try {
    console.log("getDoctor started......");
    const doctor = await DoctorModel.find({email : req.email});
    res.status(200).send(doctor);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getDoctorByEmail = async (req, res) => {
  try {
    const doctor = await DoctorModel.find({email : req.params.email});
    res.status(200).send(doctor);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const saveDoctor = async (req, res) => {
    const newDoctor = new DoctorModel(req.body);
  try {
    await newDoctor.save();
    res.status(200).send({ ...req.body});
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

const getDoctors = async (req,res) => {
    try {
        const doctors = await DoctorModel.find();
        res.status(200).send(doctors);
      } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
      }
}

module.exports = {
    getDoctor,
    getDoctorByEmail,
    saveDoctor,
    getDoctors
};
