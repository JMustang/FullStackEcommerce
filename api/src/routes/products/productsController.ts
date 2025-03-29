import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";

export function listProducts(req: Request, res: Response) {
  console.log(req.params);
  res.send("List of products page!");
}

export function getProductsById(req: Request, res: Response) {
  console.log(req.params);
  res.send("Just one product page!");
}

export async function createProducts(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.body)
      .returning();
    res.status(201).json(product);
  } catch (e) {
    res.status(500).send(e);
  }
}

export function updateProducts(req: Request, res: Response) {
  res.send("Update products page!");
}

export function deleteProducts(req: Request, res: Response) {
  res.send("Delete products page!");
}
