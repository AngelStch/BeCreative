const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   username: { type: String, required: true ,minLength: 2},
  password: {  type: String, required: true,minLength: 2},  

});

const User = mongoose.model("User", userSchema)
module.exports = User;