import { database } from "../../database"

const createProductsServices = async (productData) => {   
        const queryResponse = await database.query(
            `INSERT INTO 
                products(name, price, category_id)
            VALUES 
                ($1, $2, $3)
            RETURNING *; 
            `,
            [productData.name, productData.price, productData.category_id]
        )
        return queryResponse.rows[0]
}

export default createProductsServices