import { Router } from "express";
import {
  createProducts,
  getProductsById,
  listProducts,
} from "./productsController";

//Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductsById);

router.post("/", createProducts);

router.put("/:id", (req: any, res: any) => {
  res.send("Update products page!");
});

router.delete("/:id", (req: any, res: any) => {
  res.send("Delete products page!");
});

export default router;
