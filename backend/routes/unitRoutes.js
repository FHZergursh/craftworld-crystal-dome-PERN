import express from "express"
import { addUnit, getAllUnits, getUnit } from "../controllers/unitControllers.js";

const unitRoutes = express.Router();

unitRoutes.get("/", getAllUnits)
unitRoutes.get("/:id", getUnit)
unitRoutes.post("/", addUnit)

export default unitRoutes