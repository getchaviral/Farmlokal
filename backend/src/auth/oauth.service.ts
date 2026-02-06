import axios from "axios";
import { redis } from "../config/redis";

const TOKEN_KEY = "oauth:token";
const LOCK_KEY = "oauth:lock";

export async function getAccessToken(): Promise<string> {
  const cached = await redis.get(TOKEN_KEY);
  if (cached) return cached;

  const lock = await redis.set(LOCK_KEY, "1", "EX", 5, "NX");

  if (!lock) {
    await new Promise((res) => setTimeout(res, 200));
    return getAccessToken();
  }

  const res = await axios.post("https://example.com/oauth/token", {
    client_id: "client",
    client_secret: "secret", // ✅ comma fixed
    grant_type: "client_credentials",
  });

  const token = res.data.access_token;
  const expiresIn = res.data.expires_in || 300;

  await redis.set(TOKEN_KEY, token, "EX", expiresIn - 10);
  await redis.del(LOCK_KEY);

  return token;
}
