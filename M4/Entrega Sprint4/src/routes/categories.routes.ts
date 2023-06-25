import { Router } from "express"
import { createCategoriesControlller } from "../controllers/categories.controllers"

const categoriesRoutes = Router()

categoriesRoutes.post("", createCategoriesControlller)

export default categoriesRoutes