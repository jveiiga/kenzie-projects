import { database } from "../../database"
import { AppError } from "../../errors/errors"

const deleteProductsServices = async (id) => {

    const queryByExistingId = await database.query(
        `SELECT 
            products.id
        FROM 
            products; 
        `
    )
    
    const listIdProducts = queryByExistingId.rows

    const idList = listIdProducts.find((idProduct) => idProduct.id === id)

    if (!idList) {
        throw new AppError("product already exists", 404)
    }

    const queryResponse = await database.query(
        `DELETE FROM 
            products 
        WHERE 
            id = $1;
        `,
        [id]
    )
    return {}
}

export default deleteProductsServices