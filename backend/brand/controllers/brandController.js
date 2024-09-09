const brandService = require("../services/brandService");

class BrandController {
  async createBrand(req, res) {
    try {
      const newBrand = await brandService.createBrand(req.body);
      res.status(200).json({ message: "Brand created successfully", newBrand });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async findBrandById(req, res) {
    try {
      const brand = await brandService.findBrandById(req.params.id);
      if (!brand) {
        return res.status(404).json({ message: "Brand not found!" });
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
      const brand = await brandService.updateBrand(req.params.id, req.body);
      if (!brand) {
        return res.status(404).json({ message: "Brand not found!" });
      }
      res
        .status(200)
        .json({ message: "Brand has been updated successfully", brand });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteBrand(req, res) {
    try {
      const brand = await brandService.deleteBrand(req.params.id);
      if (!brand) {
        return res.status(404).json({ message: "Brand not found!" });
      }
      const campaignService = require("../services/campaignService");
      const brandCampaign = await campaignService.deleteCampaignByBrandId(
        req.params.id
      );
      res.status(200).json({
        message: "Deleted successfully",
        brand,
        brandCampaign,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new BrandController();
