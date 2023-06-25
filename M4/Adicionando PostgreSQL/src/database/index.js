const db_conf = {
  user: process.env.DB_USER,
  database: "atv_adicionando_yup",
  port: 5432,
  host: "localhost",
  password: process.env.DB_PASSWORD,
};

export default db_conf;
