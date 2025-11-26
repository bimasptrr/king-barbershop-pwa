import express from "express";
import { BookingController } from "../controllers/bookingController.js";

const router = express.Router();

// Route untuk membuat booking baru (POST)
router.post("/", BookingController.create);

// Route untuk melihat semua data booking (GET)
router.get("/", BookingController.getAll);

// --- BAGIAN INI YANG KEMUNGKINAN ANDA LEWATKAN ---
export default router;