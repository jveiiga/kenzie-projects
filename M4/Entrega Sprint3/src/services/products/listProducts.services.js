import { database } from "../../database"

const listProductsServices = async () => {
    const queryResponse = await database.query(
        `SELECT
            *
        FROM 
            products;`
    )
    return queryResponse.rows
}

export default listProductsServices