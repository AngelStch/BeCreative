const mongoose = require("mongoose");

const storyIamgeSchema = new mongoose.Schema({
  text: String,
  title: String,
});

const StoryImage = mongoose.model("StoryImage", storyIamgeSchema);
module.exports = StoryImage;