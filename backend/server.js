const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Patient = require("./models/Patient");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/patrakDB")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Connection Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("PATRAK Backend Running");
});

// Register Patient API
app.post("/api/patients/register", async (req, res) => {
  try {
    const { fullName, age, gender, phone } = req.body;

    const newPatient = new Patient({
      fullName,
      age,
      gender,
      phone
    });

    const savedPatient = await newPatient.save();

    res.status(201).json({
      message: "Patient registered successfully",
      patient: savedPatient
    });

  } catch (error) {
    res.status(500).json({
      message: "Error registering patient",
      error: error.message
    });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});