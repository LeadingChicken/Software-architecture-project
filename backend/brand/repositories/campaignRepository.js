const Campaign = require('../models/Campaign')

class CampaignRepository {
    async createCampaign(campaignData) {
        const newCampaign = new Campaign(campaignData);
        return await newCampaign.save();
    }

    async findCampaignByName(campaignName) {
        return await Campaign.findOne({ campaignName });
    }

    async findCampaignById(campaignId) {
        return await Campaign.findById(campaignId);
    }

    async findAllCampaign() {
        return await Campaign.find();
    }

    async updateCampaign(campaignId, campaignData) {
        return await Campaign.findByIdAndUpdate(
            campaignId, 
            campaignData, 
            { new: true }
        );
    }
}

module.exports = new CampaignRepository();