import { db } from "../config/db";

export async function fetchProducts(query: any) {
  const { limit = 20, cursor } = query;

  let sql = `SELECT * FROM products`;
  const params: any[] = [];

  if (cursor) {
    sql += ` WHERE created_at < ?`;
    params.push(cursor);
  }

  sql += ` ORDER BY created_at DESC LIMIT ?`;
  params.push(Number(limit));

  const [rows] = await db.query(sql, params);
  return rows;
}
