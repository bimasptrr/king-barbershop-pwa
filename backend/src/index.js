import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Import Routes (Pastikan file-file ini sudah ada, jika belum buat dummy dulu)
import serviceRoutes from "./routes/serviceRoutes.js";
import capsterRoutes from "./routes/capsterRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const app = express();
// Menggunakan port dari .env, jika tidak ada pakai 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main Routes
app.use("/api/services", serviceRoutes);
app.use("/api/capsters", capsterRoutes);
app.use("/api/bookings", bookingRoutes);

// Root endpoint untuk cek server
app.get("/", (req, res) => {
  res.send("King Barbershop API is running!");
});

// INI BAGIAN PENTING AGAR SERVER TIDAK MATI
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});