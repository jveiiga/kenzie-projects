import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces/categories"
import createCategoriesService from "../services/categories/createCategories.service"
import listAllPropertiesOfCategoryService from "../services/categories/listAllPropertiesOfCategory.service"
import listCategoriesService from "../services/categories/listCategories.service"

const createCategoriesControlller = async (req: Request, res: Response) => {

    const category: ICategoryRequest = req.body

    const createdCategory = await createCategoriesService(category)
    
    return res.status(201).json(createdCategory)
}


const listCategoriesController = async (req: Request, res: Response) => {
        
    const listCategories = await listCategoriesService()

    return res.status(200).json(listCategories)
}

const listAllPropertiesOfCategoryController = async (req: Request, res: Response)  => {

    const propertyId: string = req.params.id

    const listAllProperty = await listAllPropertiesOfCategoryService(propertyId)

    return res.status(200).json(listAllProperty)
}

export { 
    createCategoriesControlller, 
    listCategoriesController,
    listAllPropertiesOfCategoryController
}