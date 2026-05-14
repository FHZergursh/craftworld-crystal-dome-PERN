import express from "express"
import { addUnit, deleteUnit, getAllUnits, getUnit, updateUnit } from "../controllers/unitControllers.js";

const unitRoutes = express.Router();

unitRoutes.get("/", getAllUnits)
unitRoutes.get("/:id", getUnit)
unitRoutes.post("/", addUnit)
unitRoutes.delete("/:id", deleteUnit)
unitRoutes.put("/:id", updateUnit)

export default unitRoutes