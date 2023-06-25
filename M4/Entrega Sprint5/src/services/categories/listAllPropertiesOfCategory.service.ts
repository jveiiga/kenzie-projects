import AppDataSource from "../../data-source"
import Categories from "../../entities/categories.entity"
import { AppError } from "../../errors/AppError"

const listAllPropertiesOfCategoryService = async (paramsId: string) => {
     
    const categoryRepository = AppDataSource.getRepository(Categories)

    const propetiesCategory = await categoryRepository.findOneBy({
        id: paramsId
    })

    if (!propetiesCategory) {
        throw new AppError("not found!",404)
    }
   

    return propetiesCategory
}

export default listAllPropertiesOfCategoryService

