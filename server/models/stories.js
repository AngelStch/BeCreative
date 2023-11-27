const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
   title: { type: String, required: true ,minLength: 2},
  text: {  type: String, required: true,minLength: 10},  
  owner:
  {
      type: mongoose.Types.ObjectId,
      ref: "User"
  }
});

module.exports = mongoose.model("Story", storySchema);