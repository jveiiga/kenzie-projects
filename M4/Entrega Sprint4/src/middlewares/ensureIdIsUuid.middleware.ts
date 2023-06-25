import { Request, Response, NextFunction } from "express"
import  *  as uuid  from "uuid"

const ensureIdIsUuid = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const isIdValidated =  uuid.validate(id)

    if (!isIdValidated) {
         res.status(404).json({
            message: "UUID formated is invalid!"
         })
    }

    next()
}

export default ensureIdIsUuid