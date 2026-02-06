import { fetchProducts } from "./product.repository";
import { redis } from "../config/redis";
import crypto from "crypto";

export async function getProductsService(query: any) {
  const key = crypto
    .createHash("md5")
    .update(JSON.stringify(query))
    .digest("hex");

  const cacheKey = `products:${key}`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const data = await fetchProducts(query);
  await redis.set(cacheKey, JSON.stringify(data), "EX", 60);

  return data;
}
