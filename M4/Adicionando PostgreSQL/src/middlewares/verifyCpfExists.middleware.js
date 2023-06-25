import { request } from "express";
import users from "../database/index"

const verifyCpfExistsMiddleware = async (request, response, next) => {

  const cpf = users.find((userCpf) => userCpf.cpf === request.body.cpf)

  if (cpf) {
    return {
      message: "User already exists"
    }
  }

  return next();
};

export default verifyCpfExistsMiddleware;
