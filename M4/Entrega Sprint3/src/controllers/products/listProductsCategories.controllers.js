import listProductsCategoriesServices from "../../services/products/listProductsCategories.services"

const listProductsCategoriesControllers = async  (request, response) => {
    
    const id             = request.params.id
    const productsFilter = await listProductsCategoriesServices(id)

    return response.status(200).json(productsFilter)
}

export default listProductsCategoriesControllers

