const mongoose = require("mongoose");

const storyIamgeSchema = new mongoose.Schema({
  text: String,
  title: String,
});

module.exports = mongoose.model("StoryImage", storyIamgeSchema);