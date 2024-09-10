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
  },
  numVoucher: {
    type: Number,
  }
});

const Campaign = mongoose.model("Campaign", campaignSchema);
module.exports = Campaign;