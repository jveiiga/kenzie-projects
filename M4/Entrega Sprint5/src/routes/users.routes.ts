import { Router } from "express"
import { 
    createUserController, 
    deleteUserController, 
    listUsersController, 
    updateUserController 
} from "../controllers/users.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureIdIsUuid from "../middlewares/ensureIdIsUuid.middleware"
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware"
import { userSerializer, userUpdateSerializer } from "../serializers/user.serializers"
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware"
import ensureUserIsAdminPatchMiddleware from "../middlewares/ensureUserIsAdminPatch.middleware"

const userRoutes = Router()

userRoutes.post("", ensureDataIsValidMiddleware(userSerializer), createUserController)
userRoutes.get("", ensureAuthMiddleware, ensureUserIsAdminMiddleware, listUsersController)
userRoutes.delete("/:id", ensureAuthMiddleware, ensureIdIsUuid, ensureUserIsAdminMiddleware, deleteUserController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureIdIsUuid, ensureUserIsAdminPatchMiddleware, ensureDataIsValidMiddleware(userUpdateSerializer), updateUserController)

export default userRoutes


