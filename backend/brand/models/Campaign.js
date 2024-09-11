const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
  campaignName: {
    type: String,
    unique: true,
    required: true,
  },
  picture: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  brandId: {
    type: String,
    required: true
  },
  numVoucher: {
    type: Number,
    default: 0
  }
});

const Campaign = mongoose.model("Campaign", campaignSchema);
module.exports = Campaign;