import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProductsById,
  listProducts,
  updateProducts,
} from "./productsController";
import { validateData } from "../../db/middleware/validationMiddleware";

import { z } from "zod";

const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
});

//Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductsById);

router.post("/", validateData(createProductSchema), createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
