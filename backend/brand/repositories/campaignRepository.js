const Campaign = require('../models/Campaign')

class CampaignRepository {
    async creatCampaign(campaignData) {
        const newCampaign = new Campaign(campaignData);
        return await newCampaign.save();
    }

    async findCampaignById(campaignId) {
        return await Campaign.findById(campaignId);
    }

    async findCampaignByName(campaignName) {
        return await Campaign.findOne({ campaignName });
    }

    async findAllCampaign() {
        return await Campaign.find();
    }

    async findCampaignByBrandId(brandId) {
        return await Campaign.find({ brandId });
    }

    async updateCampaign(campaignId, campaignData) {
        return await Campaign.findByIdAndUpdate(campaignId, campaignData, { new: true });
    }

    async deleteCampaign(campaignId) {
        return await Campaign.findByIdAndDelete(campaignId);
    }
}

module.exports = new CampaignRepository();