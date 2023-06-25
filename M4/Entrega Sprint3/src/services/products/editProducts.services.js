import { database } from "../../database"
import { AppError } from "../../errors/errors"

const editProductsServices = async ({ name, price }, id) => {

    const queryByExistingId = await database.query(
        `SELECT 
            products.id
        FROM 
            products; `
    )

    const listIdProducts = queryByExistingId.rows

    const idList = listIdProducts.find((idProduct) => idProduct.id === id)

    if (!idList) {
        throw new AppError("product already exists", 404)
    }

    const queryResponse = await database.query(
        `UPDATE 
            products  
        SET 
            name = $1, 
            price = $2
        WHERE 
            id = $3
        RETURNING *;
        `,
        [name, price, id]
    )
    return queryResponse.rows[0]
}

export default editProductsServices