import { Router } from "express"
import { createSchedulesUsersPropertiesController, listSchedulesUsersPropertiesController } from "../controllers/schedules.controller"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"

const schedulesRoutes = Router()

schedulesRoutes.post("", ensureAuthMiddleware, createSchedulesUsersPropertiesController)
schedulesRoutes.get("/properties/:id", )

export default schedulesRoutes