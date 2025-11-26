import express from "express";
import { CapsterController } from "../controllers/capsterController.js";

const router = express.Router();
router.get("/", CapsterController.getAll);

export default router; // <--- Pastikan ada ini