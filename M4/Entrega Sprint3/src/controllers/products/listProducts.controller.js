import listProductsServices from "../../services/products/listProducts.services"

const listProductsController = async (request, response) => {
    
    const productsListData = await listProductsServices()

    return response.status(200).json(productsListData)
}

export default listProductsController