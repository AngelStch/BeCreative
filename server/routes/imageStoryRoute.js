const express = require('express');
const router = express.Router();
const StoryImage = require('../models/storiesImages.js');

// POST route to create a new image story
router.post('/create', async (req, res) => {
  try {
    const newImageStory = new StoryImage(req.body);
    await newImageStory.save();

    res.status(200)
    res.message = 
    "Image story created successfully"
  } catch (error) {
    console.error('Error creating image story:', error);
    res.status(500).json({ message: 'Failed to create image story' });
  }
});

module.exports = router;
