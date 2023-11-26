const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  text: String,
  title: String,
});

module.exports = mongoose.model("Image", imageSchema);