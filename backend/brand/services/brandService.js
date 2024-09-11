const brandRepository = require('../repositories/brandRepository')

class BrandService {
    async createBrand({ brandName, field, location, gps, status }) {
        const existingBrand = await brandRepository.findBrandByName(brandName);
        if (existingBrand) {
            throw new Error('Brand name already exists');
        }
        return await brandRepository.createBrand({
            brandName,
            field,
            location,
            gps,
            status
        });
    }

    async findBrandById(brandId) {
        return await brandRepository.findBrandById(brandId);
    }

    async findAllBrand() {
        return await brandRepository.findAllBrand();
    }

    async updateBrand(brandId, latestBrandName, { brandName, field, location, gps, status }) {
        if (brandName != latestBrandName) {
            const existingBrand = await brandRepository.findBrandByName(brandName);
            if (existingBrand) {
                throw new Error('Brand name already exists');
            }
        }
        return await brandRepository.updateBrand(
            brandId,
            { brandName, field, location, gps, status }
        );
    }

    async deleteBrand(brandId) {
        return await brandRepository.deleteBrand(brandId);
    }
}

module.exports = new BrandService();