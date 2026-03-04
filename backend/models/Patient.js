const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    trim: true
  },

  age: {
    type: Number,
    required: true,
    min: 0,
    max: 120
  },

  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
  },

  phone: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/   // ensures 10 digit phone number
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Patient", patientSchema);