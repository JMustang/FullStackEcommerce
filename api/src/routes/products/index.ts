import { Router } from "express";
import {
  createProducts,
  deleteProducts,
  getProductsById,
  listProducts,
  updateProducts,
} from "./productsController";

//Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductsById);

router.post("/", createProducts);

router.put("/:id", updateProducts);

router.delete("/:id", deleteProducts);

export default router;
