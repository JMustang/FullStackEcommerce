import { Router } from "express";

//Products endpoints
const router = Router();

router.get("/", (req: any, res: any) => {
  console.log(req.params);
  res.send("List of products page!");
});

router.get("/:id", (req: any, res: any) => {
  console.log(req.params);
  res.send("Just one product page!");
});

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
