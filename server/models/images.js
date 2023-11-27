const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: { type: String, required: true, match:[/^https?:\/\/.+/, "Provide valid creature image link!" ]},
  owner:
  {
      type: mongoose.Types.ObjectId,
      ref: "User"
  }
});

module.exports = mongoose.model("Image", imageSchema);