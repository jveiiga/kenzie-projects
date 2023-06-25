import createCategoriesService from "../../services/categories/createCategories.services";


const createCategoriesController = async (request, response) => {

    const data         = request.validatedBody 
    console.log(data)
    const categoryName = await createCategoriesService(data)
    
    return response.status(201).json(categoryName)
}

export default createCategoriesController