import express from "express";
import users from "./database"
import { v4 as uuidv4 } from "uuid"

const app = express();
app.use(express.json())

// Services
const createUserService = (email, name, birthDate) => {

  const userArealdyExists = users.find((user) => user.email === email);

  if (userArealdyExists) {
    return "This email address is already being used";
  }

  const newUser = {
    id: uuidv4(),
    email,
    name,
    birthDate,
  };

  users.push(newUser);
  return newUser
};

const listUsersService = () => {
  return users;
};

const deleteUserService = (id, response) => {

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return response.status(404).json("User not found");
  }

  users.splice(userIndex, 1);

  return response.status(200).json("Usuário excluido");
} 

// Controllers
const createUserController = (request, response) => {
  const { email, name, birthDate } = request.body;

  const user = createUserService(email, name, birthDate);

  return response.send(user);
};

const listUsersController = (request, response) => {
  const usersList = listUsersService();

  return response.json(users);
};

const deleteUserController = (request, response) => {

  const id             = request.params.id 
  const [status, data] = deleteUserService(id, response)

  return response.status(status).json(data)
};

// Routes
app.post("/users", createUserController);
app.get("/users", listUsersController);
app.delete("/users/:id", deleteUserController);

// Port
app.listen(3000, () =>
  console.log(`App is running on http://localhost:3000`)
);
