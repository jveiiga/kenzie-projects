import { Router } from "express"
import createProductsController from "../controllers/products/createProducts.controllers"
import deleteProductsControllers from "../controllers/products/deleteProducts.controllers"
import editProductsControllers from "../controllers/products/editProducts.controllers"
import listProductControllers from "../controllers/products/listProduct.controllers"
import listProductsController from "../controllers/products/listProducts.controller"
import listProductsCategoriesControllers from "../controllers/products/listProductsCategories.controllers"
import creationDataValidationMiddleware from "../middlewares/creationDataValidationMiddleware"
import { createProductsSerializers } from "../serializers/product.serializers"

const productsRoutes = Router()

productsRoutes.post("", creationDataValidationMiddleware(createProductsSerializers), createProductsController)
productsRoutes.get("", listProductsController)
productsRoutes.get("/:id", listProductControllers)
productsRoutes.delete("/:id", deleteProductsControllers)
productsRoutes.patch("/:id", editProductsControllers)
productsRoutes.get("/category/:id", listProductsCategoriesControllers)

export default productsRoutes