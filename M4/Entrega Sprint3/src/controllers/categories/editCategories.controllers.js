import editCategoriesServices from "../../services/categories/editCategories.services"

const editCategoriesController = async (request, response) => {

    const categoryData = request.body
    const id           = request.params.id
    const dataUpdate   = await editCategoriesServices(categoryData, id)

    return response.status(200).json(dataUpdate)
}

export default editCategoriesController