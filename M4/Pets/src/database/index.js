import { Client } from "pg"
import "dotenv/config"

const database = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: "localhost",
  port: 5432,
});

const startDatabase = async () => {
  await database.connect();
  console.log("Database connected");
};

export { database, startDatabase };