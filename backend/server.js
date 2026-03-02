const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});