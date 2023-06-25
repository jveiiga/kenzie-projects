import deleteProductsServices from "../../services/products/deleteProducts.services"

const deleteProductsControllers = async (request, response) => {
    const id            = request.params.id
    const productDelete = await deleteProductsServices(id)
    
    return response.status(204).json(productDelete)
}

export default deleteProductsControllers