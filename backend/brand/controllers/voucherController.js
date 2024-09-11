const voucherService = require('../services/voucherService');

class VoucherController {
    async createVoucher(req, res) {
        try {
            const newVoucher = await voucherService.createVoucher(req.body);
            const collection = await voucherService.findAllVoucher();
            res
                .status(200)
                .json({ 
                    message: 'Voucher creates successfully',
                    newVoucher,
                    collection
                 });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findVoucherById(req, res) {
        try {
            const voucher = await voucherService.findVoucherById(req.params.id);
            if(!voucher) {
                res.status(404).json({ message: 'Voucher not found' });
            }
            res.status(200).json(voucher);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async findAllVoucher(req, res) {
        try {
            const collection = await voucherService.findAllVoucher();
            res.status(200).json(collection);
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateVoucher(req, res) {
        try {
            const existingVoucher = await voucherService.findVoucherById(req.params.id);
            if(!existingVoucher) {
                res.status(404).json({ message: 'Voucher not found' });
            }
            const updatedVoucher = await voucherService.updateVoucher(req.params.id, req.body);
            res.status(200).json({ 
                message: 'Voucher updated successfully',
                updatedVoucher
             })
        } catch(error) {
            res.status(200).json({ message: error.message });
        }
    }

    async deleteVoucher(req, res) {
        try {
            const existingVoucher = await voucherService.findVoucherById(req.params.id);
            if(!existingVoucher) {
                res.status(404).json({ message: 'Voucher not found' });
            }
            const deletedVoucher = await voucherService.deleteVoucher(req.params.id);
            const collection = await voucherService.findAllVoucher();
            res.status(200).json({ 
                message: 'Voucher deleted successfully',
                deletedVoucher,
                collection
             });
        } catch(error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new VoucherController();