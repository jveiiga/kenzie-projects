import { database } from "../../database"

const listProductsCategoriesServices = async (id) => {
    const queryResponse = await database.query(
        `SELECT
            categories.name AS category,
            products.name,
            products.price
        FROM 
            products  
        JOIN 
            categories ON categories.id = products.category_id 
        WHERE 
            categories.id  = $1;
        `,
        [id]
    )
    return queryResponse.rows
}

export default listProductsCategoriesServices