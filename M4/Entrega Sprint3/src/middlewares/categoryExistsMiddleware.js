import { database } from "../database"

const categoryExistsMiddleware = async (request, response, next) => { 
    const queryResponse = await database.query(
        `SELECT 
            *
        FROM 
            categories
        WHERE 
            name = $1;
        `,
        [request.body.name]
    )
    
    const category = queryResponse.rows[0] 

    if (category) {
        return response.status(400).json({
            "message": "category already exists",       
        })
    }
    
    return next()
}

export default categoryExistsMiddleware