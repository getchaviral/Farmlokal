import { Router } from "express";
import { getProducts } from "./products/product.controller";
import { apiBWebhook } from "./external/apiB.webhook";

const router = Router();

router.get("/products", getProducts);
router.post("/webhooks/api-b", apiBWebhook);

export default router;
