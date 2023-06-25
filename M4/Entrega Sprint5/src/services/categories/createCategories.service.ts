import AppDataSource from "../../data-source"
import Categories from "../../entities/categories.entity"
import { AppError } from "../../errors/AppError"
import { ICategoryRequest } from "../../interfaces/categories"

const createCategoriesService = async (categoryData: ICategoryRequest) => {

    
    const categoryRepository = AppDataSource.getRepository(Categories)
    
    const { name } = categoryData
    
    const findCategory = await categoryRepository.findOneBy({
        name
    })

    if (findCategory) {
        throw new AppError("Category already exists!", 409)
    }

    const createdCategory = categoryRepository.create(categoryData)

    await categoryRepository.save(createdCategory)

    return createdCategory
}

export default createCategoriesService