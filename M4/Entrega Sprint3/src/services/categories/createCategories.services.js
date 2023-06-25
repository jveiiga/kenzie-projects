import { database } from "../../database"

const createCategoriesService = async (categoryData) => {
        const queryResponse = await database.query(
            `INSERT INTO 
                categories(name)
            VALUES
                ($1)
            RETURNING *;`,
            [categoryData.name]
        )
        return queryResponse.rows[0]  
}

export default createCategoriesService

