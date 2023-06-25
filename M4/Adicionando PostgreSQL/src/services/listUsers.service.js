const listUsersService = async () => {
  const queryResponse = await database
    .query("SELECT * FROM users")

    return [200, queryResponse.rows]
};

export default listUsersService;
