import express from "express";
import { ServiceController } from "../controllers/serviceController.js";

const router = express.Router();
router.get("/", ServiceController.getAll);

export default router; // <--- Pastikan ada ini