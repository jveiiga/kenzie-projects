import { database } from "../../database"
import { AppError } from "../../errors/errors"

const deleteCategoriesServices = async (id) => {

    const queryByExistingId = await database.query(
        `SELECT 
            categories.id
        FROM 
            categories;
        `
    )

    const listIdCategories = queryByExistingId.rows

    const idList = listIdCategories.find((idCategory) => idCategory.id === id)

    if (!idList) {
        throw new AppError("category already exists", 404)
    }

    const queryResponse = await database.query(
        `DELETE FROM 
            categories 
        WHERE 
            id = $1;
        `,
        [id]
    )
    return {}
}

export default deleteCategoriesServices