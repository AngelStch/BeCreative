// models/storiesImages.js

const mongoose = require('mongoose');

const storyImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  textTitle: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
});

const StoryImage = mongoose.model('StoryImage', storyImageSchema);

module.exports = StoryImage;
