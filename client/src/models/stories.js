const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  text: String,
  title: String,
});

module.exports = mongoose.model("Story", storySchema);