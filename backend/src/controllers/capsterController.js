import { CapsterModel } from "../models/capsterModel.js";

// TAMBAHKAN 'export' DI SINI
export const CapsterController = {
  async getAll(req, res) {
    try {
      const capsters = await CapsterModel.getAll();
      res.json(capsters);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};