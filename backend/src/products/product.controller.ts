import { Request, Response } from "express";
import { getProductsService } from "./product.service";

export async function getProducts(req: Request, res: Response) {
  const data = await getProductsService(req.query);
  res.json(data);
}
