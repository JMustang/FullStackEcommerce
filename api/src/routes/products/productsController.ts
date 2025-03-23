import { Request, Response } from "express";

export function listProducts(req: Request, res: Response) {
  console.log(req.params);
  res.send("List of products page!");
}

export function getProductsById(req: Request, res: Response) {
  console.log(req.params);
  res.send("Just one product page!");
}

export function createProducts(req: Request, res: Response) {
  console.log(req.body);
  res.send("Create products page!");
}

export function updateProducts(req: Request, res: Response) {
  res.send("Update products page!");
}

export function deleteProducts(req: Request, res: Response) {
  res.send("Delete products page!");
}
