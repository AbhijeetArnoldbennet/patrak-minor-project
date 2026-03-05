const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },

  visitDate: {
    type: String,
    required: true
  },

  visitTime: {
    type: String,
    required: true
  },

  doctor: {
    type: String,
    default: "N/A"
  },

  visitType:{
    type:String,
    enum:["New","Follow-up"],
    default:"New"
  },
  
  tokenNumber: {
    type: Number,
    default: null
  },

  status: {
    type: String,
    enum: ["Waiting","In Progress","Done"],
    default: "Waiting"
  },   

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Visit", visitSchema);