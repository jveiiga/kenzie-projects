import { database } from "../database";

const listUsersService = async () => {
  const queryResponse = await database
    .query("SELECT * FROM users;")
    .then((res) => {
        console.log(res.rows)
        return res.rows
    });

  return [200, queryResponse];
};

const createUserService = async (payload) => {
    const [queryResponse] = await database
      .query(
        `INSERT INTO users (name, cpf, password)
        VALUES ($1, $2, $3)
        RETURNING *`,
        [payload.name, payload.cpf, payload.password]
      )
      .then((res) => {
        console.log(res.rows)
        return res.row
    });
  
    return [201, queryResponse];
  }
  
  export { listUsersService, createUserService };