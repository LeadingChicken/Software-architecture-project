const mongoose = require('mongoose')

const voucherSchema = new mongoose.Schema({
    qrCode: {
        type: String
    },
    picture: {
        type: String
    },
    value: {
        type: Number,
        default: 0
    },
    description: {
        type: String
    },
    dueTime: {
        type: Date
    },
    status: {
        type: Boolean,
        default: false
    },
    campaignId: {
        type: String,
        require: true
    }
})

const Voucher = mongoose.model('Voucher', voucherSchema);
module.exports = Voucher;