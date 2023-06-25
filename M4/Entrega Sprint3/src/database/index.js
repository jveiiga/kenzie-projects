import pkg from "pg";
const {Client} = pkg
import "dotenv/config"

export const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        //configurações de conexão com o DB de teste
        user: process.env.DB_USER,
        host: "localhost",
        database: "tests_products",
        password: process.env.DB_PASSWORD,
        port: 5432,
      }
    : {
        //configurações de conexão com o DB
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log('database conectada')
};

