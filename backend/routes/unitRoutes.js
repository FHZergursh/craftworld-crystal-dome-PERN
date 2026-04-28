import express from "express"
import { getAllUnits } from "../controllers/unitControllers.js";

const unitRoutes = express.Router();

unitRoutes.get("/", getAllUnits)

export default unitRoutes