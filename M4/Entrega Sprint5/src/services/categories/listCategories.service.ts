import AppDataSource from "../../data-source"
import Categories from "../../entities/categories.entity"

const listCategoriesService = async () => {

    const categoryRepository = AppDataSource.getRepository(Categories)

    const listCategories = await categoryRepository.find()

    return listCategories
}

export default listCategoriesService