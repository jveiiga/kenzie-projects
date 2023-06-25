import { database } from "../../database"
import { AppError } from "../../errors/errors"

const editCategoriesServices = async ({ name }, id) => {

    const queryByExistingId = await database.query(
        `SELECT 
            categories.id
        FROM 
            categories;`
    )

    const listIdCategories = queryByExistingId.rows

    const idList = listIdCategories.find((idFind) => idFind.id === id)

    if (!idList) {
        throw new AppError("category already exists", 404)
    }
        
    const queryResponse = await database.query(
        `UPDATE 
            categories 
        SET 
            name = $1
        WHERE 
            id = $2
        RETURNING *;
        `,
        [name, id]
    )
    return queryResponse.rows[0]
}

export default editCategoriesServices