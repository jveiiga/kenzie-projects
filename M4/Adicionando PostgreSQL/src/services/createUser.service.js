const createUserService = async (payload) => {
  const [queryResponse] = await database 
    .query(
      `INSERT INTO users (name, cpf, password)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [payload.name, payload.cpf, payload.password]
    )
    return [201, queryResponse.rows[0]]
}

export default createUserService;
