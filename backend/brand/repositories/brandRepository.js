const Brand = require('../models/Brands')

class BrandRepository {
    async createBrand(brandData) {
        const newBrand = new Brand(brandData);
        return await newBrand.save();
    }

    async findBrandById(brandId) {
        return await Brand.findById(brandId);
    }

    async findBrandByName(brandName) {
        return await Brand.findOne({ brandName });
    }

    async findAllBrand() {
        return await Brand.find();
    }

    async updateBrand(brandId, brandData) {
        return await Brand.findByIdAndUpdate(
            brandId, 
            brandData, 
            { new: true }
        );
    }

    async deleteBrand(brandId) {
        return await Brand.findByIdAndDelete(brandId);
    }
}

module.exports = new BrandRepository();