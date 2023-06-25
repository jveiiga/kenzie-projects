import { Router } from "express"
import { createPropertiesController } from "../controllers/properties.controller"

const propertiesRoutes = Router()

propertiesRoutes.post("", createPropertiesController)

export default propertiesRoutes