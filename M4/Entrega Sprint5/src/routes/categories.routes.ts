import { Router } from "express"
import { 
    createCategoriesControlller, 
    listAllPropertiesOfCategoryController,
    listCategoriesController,  
} from "../controllers/categories.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware"

const categoriesRoutes = Router()

categoriesRoutes.post("", ensureAuthMiddleware, ensureUserIsAdminMiddleware, createCategoriesControlller)
categoriesRoutes.get("", listCategoriesController)
categoriesRoutes.get("/:id/properties", listAllPropertiesOfCategoryController)

export default categoriesRoutes