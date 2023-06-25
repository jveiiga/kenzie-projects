import AppDataSource from "../../data-source"
import Categories from "../../entities/categories.entity"
import { ICategoryRequest } from "../../interfaces/categories"

const createCategoriesService = async (categoryData: ICategoryRequest) => {

    const categoryRepository = AppDataSource.getRepository(Categories)

    const createdCategory = categoryRepository.create(categoryData)

    await categoryRepository.save(createdCategory)

    return createdCategory
}

export default createCategoriesService