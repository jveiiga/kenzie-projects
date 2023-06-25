import { Router } from "express"
import { 
    createSchedulesController, 
    listSchedulesByIdPropertyController,  
} from "../controllers/schedules.controller"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware"

const schedulesRoutes = Router()

schedulesRoutes.post("", ensureAuthMiddleware, createSchedulesController)
schedulesRoutes.get("/properties/:id", ensureAuthMiddleware, ensureUserIsAdminMiddleware, listSchedulesByIdPropertyController)

export default schedulesRoutes