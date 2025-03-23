import { Router } from "express";
import { getProductsById, listProducts } from "./productsController";

//Products endpoints
const router = Router();

router.get("/", listProducts);

router.get("/:id", getProductsById);

router.post("/", (req: any, res: any) => {
  res.send("Create products page!");
});

router.put("/:id", (req: any, res: any) => {
  res.send("Update products page!");
});

router.delete("/:id", (req: any, res: any) => {
  res.send("Delete products page!");
});

export default router;
