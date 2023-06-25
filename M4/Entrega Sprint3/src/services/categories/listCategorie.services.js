import { database } from "../../database"
import { AppError } from "../../errors/errors"


const listCategorieService = async (id) => {
    const queryByExistingId = await database.query(
        `SELECT 
            categories.id
        FROM 
            categories;`
    )

    const listIdCategories = queryByExistingId.rows

    const idList = listIdCategories.find((idFind) => idFind.id === id)

    if(!idList) {
        throw new AppError("category already exists", 404)
    }

    const queryResponse = await database.query(
        `SELECT 
            *
        FROM 
            categories
        WHERE 
            id = $1;
        `,
        [id]
    )
    return queryResponse.rows[0]
}

export default listCategorieService