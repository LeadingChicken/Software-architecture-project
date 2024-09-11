const voucherRepository = require('../repositories/voucherRepository');

class VoucherService {
    async createVoucher({ qrCode, picture, value, description, dueTime, status, campaignId }) {
        if(
            value
            && (value < 0 || !Number.isInteger(value))
        ) {
            throw new Error('Value must be an interger');
        }
        const campaignService = require('../services/campaignService');
        const existingCampaign = await campaignService.findCampaignById(campaignId);
        if(!existingCampaign) {
            throw new Error('Campaign ID not found');
        }
        return await voucherRepository.createVoucher({ qrCode, picture, value, description, dueTime, status, campaignId });
    }

    async findVoucherById(voucherId) {
        return await voucherRepository.findVoucherById(voucherId);
    }

    async findAllVoucher() {
        return await voucherRepository.findAllVoucher();
    }

    async updateVoucher(voucherId, { qrCode, picture, value, description, dueTime, status, campaignId }) {
        if(
            value
            && (value < 0 || !Number.isInteger(value))
        ) {
            throw new Error('Value must be an interger');
        }
        const campaignService = require('../services/campaignService');
        const existingCampaign = await campaignService.findCampaignById(campaignId);
        if(!existingCampaign) {
            throw new Error('Campaign ID not found');
        }
        return await voucherRepository.updateVoucher(voucherId, { qrCode, picture, value, description, dueTime, status, campaignId });
    }

    async deleteVoucher(voucherId) {
        return await voucherRepository.deleteVoucher(voucherId);
    }

    async deleteVoucherByCampaignId(campaignId) {
        const vouchers = await voucherRepository.findVoucherByCampaignId(campaignId);
        const deletedVouchers = await Promise.all(
            vouchers.map(async (Voucher) => {
                return await voucherRepository.deleteVoucher(Voucher.id);
            }));
        return deletedVouchers;
    }
}

module.exports = new VoucherService();