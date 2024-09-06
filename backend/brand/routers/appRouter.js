const express = require('express');
const brandController = require('../controllers/brandController');
const campaignController = require('../controllers/campaignController');
const router = express.Router();

router.post('/brands', brandController.createBrand);
router.get('/brands/:id', brandController.findBrandById);
router.get('/brands', brandController.findAllBrand);
router.put('/brands/:id', brandController.updateBrand);
router.delete('/brands/:id', brandController.deleteBrand);

router.post('/campaigns', campaignController.createCampaign);
router.get('/campaigns/:id', campaignController.findCampaignById);
router.get('/campaigns', campaignController.findAllCampaign);
router.put('/campaigns/:id', campaignController.updateCampaign);
router.delete('/campaigns/:id', campaignController.deleteCampaign);

module.exports = router;