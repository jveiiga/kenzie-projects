import deleteCategoriesServices from "../../services/categories/deleteCategories.services"

const deleteCategoriesControler = async (request, response) => {

    const userId   = request.params.id
    const deleteId = await deleteCategoriesServices(userId)

    return response.status(204).json(deleteId)
}

export default deleteCategoriesControler

