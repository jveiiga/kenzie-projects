import createProductsServices from "../../services/products/createProducts.services"

const createProductsController = async (request, response) => {

    const productData  = request.validatedBody
    const dataRegister = await createProductsServices(productData)

    return response.status(201).json(dataRegister)
}

export default createProductsController