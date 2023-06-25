import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces/categories"
import createCategoriesService from "../services/categories/createCategories.service"

const createCategoriesControlller = async (req: Request, res: Response) => {

    const category: ICategoryRequest = req.body

    const createdCategory = createCategoriesService(category)
    
    return res.status(201).json(createdCategory)
}

export { createCategoriesControlller }