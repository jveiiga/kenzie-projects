import { Router } from "express"

const userRoutes = Router()

userRoutes.post("/books", createBookController);
userRoutes.get("/books", listBooksController);
userRoutes.get("/books/:id", verifyBookExistsMiddleware, retrieveBookController);

export default userRoutes