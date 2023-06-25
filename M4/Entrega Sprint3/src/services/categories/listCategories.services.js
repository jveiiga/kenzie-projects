import { database } from "../../database"

const listCategoriesService = async () => {
    const queryResponse = await database.query(
        `SELECT 
            *
        FROM 
            categories;`,
    )
    return queryResponse.rows
}

export default listCategoriesService