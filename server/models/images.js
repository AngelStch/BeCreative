const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  image: { type: String, required: true, match:[/^https?:\/\/.+/, "Provide valid creature image link!" ]},
  owner:
  {
      type: mongoose.Types.ObjectId,
      ref: "User"
  }
});

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
