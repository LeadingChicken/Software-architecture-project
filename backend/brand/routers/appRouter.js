const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');
const campaignController = require('../controllers/campaignController');
const voucherController = require('../controllers/voucherController');

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

router.post('/vouchers', voucherController.createVoucher);
router.get('/vouchers/:id', voucherController.findVoucherById);
router.get('/vouchers', voucherController.findAllVoucher);
router.put('/vouchers/:id', voucherController.updateVoucher);
router.delete('/vouchers/:id', voucherController.deleteVoucher);

module.exports = router;