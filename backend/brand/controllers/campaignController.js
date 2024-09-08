const campaignService = require('../services/campaignService')

class CampaignController {
    async createCampaign(req, res) {
        try {
            const campaign = await campaignService.createCampaign(req.body);
            res.status(200).json(campaign);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findCampaignById(req, res) {
        try {
            const campaign = await campaignService.findCampaignById(req.params.id);
            if(!campaign) {
                return res.status(404).json({ message: 'Campaign not found!' });
            }
            res.status(200).json(campaign);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAllCampaign(req, res) {
        try {
            const campaign = await campaignService.findAllCampaign();
            res.status(200).json(campaign);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateCampaign(req, res) {
        try {
            const campaign = await campaignService.updateCampaign(req.params.id, req.body);
            if(!campaign) {
                return res.status(404).json({ message: 'Campaign not found!' });
            }
            res.status(200).json(campaign);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteCampaign(req, res) {
        try {
            const campaign = await campaignService.deleteCampaign(req.params.id);
            if(!campaign) {
                return res.status(404).json({ message: 'Brand not found!' });
            }
            res.status(200).json(campaign);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteCampaign(req, res) {
        try {
            const campaign = await campaignService.deleteCampaignByBrandId(req.params.id);
            if(!campaign) {
                return res.status(404).json({ message: 'Brand campaign not found!' });
            }
            res.status(200).json(campaign);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new CampaignController();