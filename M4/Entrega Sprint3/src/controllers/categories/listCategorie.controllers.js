import listCategorieService from "../../services/categories/listCategorie.services"

const listCategorieController = async (request, response) => {

    const idCategory = request.params.id
    const category   = await listCategorieService(idCategory)

    return response.status(200).json(category)
}

export default listCategorieController