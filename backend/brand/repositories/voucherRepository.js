const Voucher = require('../models/Vouchers')

class VoucherRepository {
    async createVoucher(voucherData) {
        const newVoucher = new Voucher(voucherData);
        return await newVoucher.save();
    }

    async findVoucherById(voucherId) {
        return await Voucher.findById(voucherId);
    }

    async findVoucherByCampaignId(campaignId) {
        return await Voucher.find({ campaignId });
    }

    async findAllVoucher() {
        return await Voucher.find();
    }

    async updateVoucher(voucherId, voucherData) {
        return await Voucher.findByIdAndUpdate(
            voucherId, 
            voucherData,
            { new: true}
        );
    }

    async deleteVoucher(voucherId) {
        return await Voucher.findByIdAndDelete(voucherId);
    }
}

module.exports = new VoucherRepository();