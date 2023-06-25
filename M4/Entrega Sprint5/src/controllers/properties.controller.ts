import { Request, Response } from "express"
import { IPropertyRequest } from "../interfaces/properties" 
import createPropertiesService from "../services/properties/createProperties.service"
import listPropertiesService from "../services/properties/listProperties.service"

const createPropertiesController = async (req: Request, res:Response) => {

    const property: IPropertyRequest = req.body

    const newProperty = await createPropertiesService(property)

    return res.status(201).json(newProperty)

}

const listPropertiesController = async (req: Request, res: Response)  => {

    const listProperties = await listPropertiesService()

    res.status(200).json(listProperties)
}

export { 
    createPropertiesController,
    listPropertiesController        
}