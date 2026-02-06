import { Request, Response } from "express";
import { redis } from "../config/redis";

export async function apiBWebhook(req: Request, res: Response) {
  const eventId = req.body.event_id;

  const key = `webhook:event:${eventId}`;
  const exists = await redis.get(key);

  if (exists) {
    return res.status(200).send("Duplicate ignored");
  }

  await redis.set(key, "1", "EX", 86400);
  // process event here

  res.status(200).send("Processed");
}
