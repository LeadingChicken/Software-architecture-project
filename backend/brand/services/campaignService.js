const campaignRepository = require('../repositories/campaignRepository');

class CampaignService {
    async createCampaign({ campaignName, picture, startTime, endTime, brandId, numVoucher }) {
        const existingCampaign = await campaignRepository.findCampaignByName(campaignName);
        if(existingCampaign) {
            throw new Error('Campaign name already exists');
        }
        if(
            startTime != null 
            && endTime != null 
            && startTime > endTime
        ) {
            throw new Error('Start time must be before end time');
        }
        const brandService = require('../services/brandService');
        const existingBrand = await brandService.findBrandById(brandId);
        if(!existingBrand) {
            throw new Error('Brand ID not found');
        }
        if(
            numVoucher != null 
            && (numVoucher < 0 || !Number.isInteger(numVoucher))
        ) {
            throw new Error('Number of voucher must be an interger');
        }
        return await campaignRepository.creatCampaign({ 
            campaignName,
            picture,
            startTime, 
            endTime, 
            brandId, 
            numVoucher
        });
    }

    async findCampaignById(campaignId) {
        return await campaignRepository.findCampaignById(campaignId);
    }

    async findAllCampaign() {
        return await campaignRepository.findAllCampaign();
    }

    async deleteCampaignByBrandId(brandId) {
        const campaigns = await campaignRepository.findCampaignByBrandId(brandId);
        const deletedCampaigns = await Promise.all(
            campaigns.map(async (campaign) => {
                return await this.deleteCampaign(campaign._id);
            }));
        return deletedCampaigns;
    }

    async updateCampaign(campaignId, latestCampaignName, { campaignName, picture, startTime, endTime, brandId, numVoucher }) {
        if(latestCampaignName != campaignName) {
            const existingCampaign = await campaignRepository.findCampaignByName(campaignName);
            if(existingCampaign) {
                throw new Error('Campaign name already exists');
            }
        }  
        if(
            startTime != null 
            && endTime != null 
            && startTime > endTime
        ) {
            throw new Error('Start time must be before end time');
        }
        const brandService = require('../services/brandService');
        const existingBrand = await brandService.findBrandById(brandId);
        if(!existingBrand) {
            throw new Error('Brand ID not found');
        }
        if(
            numVoucher != null 
            && (numVoucher < 0 || !Number.isInteger(numVoucher))
        ) {
            throw new Error('Number of voucher must be an interger');
        }
        return await campaignRepository.updateCampaign(
            campaignId, 
            { campaignName, picture, startTime, endTime, brandId, numVoucher });
    }

    async deleteCampaign(campaignId) {
        const voucherService = require('../services/voucherService');
        const campaignVoucher = await voucherService.deleteVoucherByCampaignId(campaignId);
        const deletedCampaign = await campaignRepository.deleteCampaign(campaignId)
        return { deletedCampaign, campaignVoucher };
    }
}

module.exports = new CampaignService();