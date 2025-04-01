import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProductsById,
  listProducts,
  updateProducts,
} from "./productsController";
import { validateData } from "../../db/middleware/validationMiddleware";

import { createInsertSchema } from "drizzle-zod";
import { productsTable } from "../../db/productsSchema";

//Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductsById);

router.post("/", validateData(createProductSchema), createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
