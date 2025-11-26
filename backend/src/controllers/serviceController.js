import { ServiceModel } from "../models/serviceModel.js";

// PERHATIKAN: Harus ada kata 'export' di depan const
export const ServiceController = {
  async getAll(req, res) {
    try {
      const services = await ServiceModel.getAll();
      res.json(services);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};