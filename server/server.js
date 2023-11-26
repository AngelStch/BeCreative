const express = require("express");
const mongoose = require("mongoose");
const Story = require("../client/src/models/stories.js");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect("mongodb://127.0.0.1:27017/BeCreative", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get("/api/stories", async (req, res) => {
  try {
    const stories = await Story.find();
    res.json(stories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});