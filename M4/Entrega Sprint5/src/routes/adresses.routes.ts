import { Router } from "express"
import { createAddressesController } from "../controllers/addresses.controller"

const addressesRoutes = Router()

addressesRoutes.post("", createAddressesController)

export default addressesRoutes