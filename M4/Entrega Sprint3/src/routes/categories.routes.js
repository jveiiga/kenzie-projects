import { Router } from "express"
import createCategoriesController from "../controllers/categories/createCategories.controllers"
import deleteCategoriesControler from "../controllers/categories/deleteCategories.controllers"
import editCategoriesController from "../controllers/categories/editCategories.controllers"
import listCategorieController from "../controllers/categories/listCategorie.controllers"
import listCategoriesController from "../controllers/categories/listCategories.controllers"
import categoryExistsMiddleware from "../middlewares/categoryExistsMiddleware"
import creationDataValidationMiddleware from "../middlewares/creationDataValidationMiddleware"
import createCategorySerializers  from "../serializers/category.serializers"

const categoryRoutes = Router()

categoryRoutes.post("", creationDataValidationMiddleware(createCategorySerializers), categoryExistsMiddleware, createCategoriesController)
categoryRoutes.get("", listCategoriesController)
categoryRoutes.get("/:id", listCategorieController)
categoryRoutes.delete("/:id", deleteCategoriesControler)
categoryRoutes.patch("/:id", editCategoriesController)


export default categoryRoutes