import { Router } from "express";
import {
  createProducts,
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

router.delete("/:id", (req: any, res: any) => {
  res.send("Delete products page!");
});

export default router;
