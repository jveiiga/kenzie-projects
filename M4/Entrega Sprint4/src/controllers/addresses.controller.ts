import { Request, Response } from "express"
import { IAddressRequest } from "../interfaces/properties"
import createAddressesService from "../services/addresses/createAddresses.service"


const createAddressesController = async (req: Request, res: Response) => {

    const address: IAddressRequest = req.body

    const newAddresses = await createAddressesService(address)

    return res.status(201).json(newAddresses)
}

export {createAddressesController}