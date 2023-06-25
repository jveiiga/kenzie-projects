import editProductsServices from "../../services/products/editProducts.services"

const editProductsControllers = async (request, response) => {

    const productData   = request.body
    const id            = request.params.id

    const productUpdate = await editProductsServices(productData, id)

    return response.status(200).json(productUpdate)
}

export default editProductsControllers