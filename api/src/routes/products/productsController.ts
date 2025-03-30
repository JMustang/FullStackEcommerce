import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);
    res.status(200).json(products);
  } catch (e) {
    res.status(500).send(e);
  }
}

export function getProductsById(req: Request, res: Response) {
  try {
  } catch (e) {
    res.status(500).send(e);
  }
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
  try {
  } catch (e) {
    res.status(500).send(e);
  }
}

export function deleteProducts(req: Request, res: Response) {
  try {
  } catch (e) {
    res.status(500).send(e);
  }
}
