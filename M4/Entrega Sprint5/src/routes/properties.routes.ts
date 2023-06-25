import { Router } from "express"
import { createPropertiesController, listPropertiesController } from "../controllers/properties.controller"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware"

const propertiesRoutes = Router()

propertiesRoutes.post("", ensureAuthMiddleware, ensureUserIsAdminMiddleware, createPropertiesController)
propertiesRoutes.get("", listPropertiesController)

export default propertiesRoutes