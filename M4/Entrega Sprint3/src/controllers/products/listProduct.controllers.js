import listProductServices from "../../services/products/listProduct.services"


const listProductControllers = async (request, response) => {

    const id      = request.params.id
    const product = await listProductServices(id)

    return response.status(200).json(product)
}

export default listProductControllers