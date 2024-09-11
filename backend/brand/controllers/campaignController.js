const campaignService = require('../services/campaignService');

class CampaignController {
    async createCampaign(req, res) {
        try {
            const newCampaign = await campaignService.createCampaign(req.body);
            const collection = await campaignService.findAllCampaign();
            res
                .status(200)
                .json({
                    message: "Campaign created successfully",
                    newCampaign,
                    collection
                });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findCampaignById(req, res) {
        try {
            const campaign = await campaignService.findCampaignById(req.params.id);
            if (!campaign) {
                return res.status(404).json({ message: 'Campaign not found' });
            }
            res.status(200).json(campaign);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAllCampaign(req, res) {
        try {
            const campaign = await campaignService.findAllCampaign();
            res.status(200).json(campaign);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateCampaign(req, res) {
        try {
            const campaign = await campaignService.findCampaignById(req.params.id);
            if (!campaign) {
                return res.status(404).json({ message: 'Campaign not found' });
            }
            const updatedCampaign = await campaignService.updateCampaign(
                req.params.id,
                campaign.campaignName,
                req.body
            )
            res
                .status(200)
                .json({ message: "Campaign updated successfully", updatedCampaign });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteCampaign(req, res) {
        try {
            const deletedCampaign = await campaignService.deleteCampaign(req.params.id);
            if (!deletedCampaign) {
                return res.status(404).json({ message: 'Brand not found' });
            }
            const collection = await campaignService.findAllCampaign();
            res
                .status(200)
                .json({
                    message: "Campain deleted successfully",
                    deletedCampaign,
                    collection
                });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new CampaignController();