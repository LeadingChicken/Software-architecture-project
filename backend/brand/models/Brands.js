const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    unique: true,
    required: true,
  },
  field: {
    type: String,
  },
  location: {
    type: String,
  },
  gps: {
    type: String,
  },
  status: {
    type: Number,
    default: 0
  }
});

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;