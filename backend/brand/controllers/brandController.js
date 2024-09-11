const brandService = require("../services/brandService");

class BrandController {
  async createBrand(req, res) {
    try {
      const newBrand = await brandService.createBrand(req.body);
      const collection = await brandService.findAllBrand();
      res
        .status(200)
        .json({
          message: "Brand created successfully",
          newBrand, 
          collection
        });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findBrandById(req, res) {
    try {
      const brand = await brandService.findBrandById(req.params.id);
      if (!brand) {
        return res.status(404).json({ message: "Brand not found" });
      }
      res.status(200).json(brand);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findAllBrand(req, res) {
    try {
      const brand = await brandService.findAllBrand();
      res.status(200).json(brand);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateBrand(req, res) {
    try {
      const brand = await brandService.findBrandById(req.params.id);
      if (!brand) {
        return res.status(404).json({ message: "Brand not found" });
      }
      const updatedBrand = await brandService.updateBrand(
        req.params.id,
        brand.brandName,
        req.body
      )
      res
        .status(200)
        .json({ message: "Brand has been updated successfully", updatedBrand});
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteBrand(req, res) {
    try {
      const deletedBrand = await brandService.deleteBrand(req.params.id);
      if (!deletedBrand) {
        return res.status(404).json({ message: "Brand not found" });
      }
      const campaignService = require("../services/campaignService");
      const brandCampaign = await campaignService.deleteCampaignByBrandId(req.params.id);
      const collection = await brandService.findAllBrand();
      res
        .status(200)
        .json({
          message: "Brand deleted successfully",
          deletedBrand,
          brandCampaign,
          collection
        });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new BrandController();