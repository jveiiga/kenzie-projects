import listCategoriesService from "../../services/categories/listCategories.services"

const listCategoriesController = async (request, response) => {

    const categories = await listCategoriesService()
    
    return response.status(200).json(categories)
}

export default listCategoriesController