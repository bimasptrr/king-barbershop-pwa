import { BookingModel } from "../models/bookingModel.js";

export const BookingController = {
  async create(req, res) {
    try {
      // Menerima data dari Front End PWA
      const booking = await BookingModel.create(req.body);
      res.status(201).json({ message: "Booking Berhasil!", data: booking });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const bookings = await BookingModel.getAll();
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};