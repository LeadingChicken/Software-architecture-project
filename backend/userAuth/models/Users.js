const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    require: true,
  },
  email: {
    type: String,
    //required: true,
  },
  fullName: {
    type: String,
    //required: true,
  },
  phoneNumber: {
    type: String,
    //required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
