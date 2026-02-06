import mysql from "mysql2/promise";

if (
  !process.env.MYSQL_HOST ||
  !process.env.MYSQL_USER ||
  !process.env.MYSQL_PASSWORD ||
  !process.env.MYSQL_DB
) {
  throw new Error("Missing MySQL environment variables");
}

export const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD, // now guaranteed string
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});
