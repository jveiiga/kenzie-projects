import { Request, Response, NextFunction } from "express"

const ensureUserIsAdminPatchMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const admin    = req.user.isAdm
    const userId   = req.user.id
    const paramsId = req.params.id

    if (userId === paramsId) {
        return next()
    }

    if (admin) {
        return next()
    }

   
    return res.status(401).json({
        message: "Administrator permission is missing!"
    })

}

export default ensureUserIsAdminPatchMiddleware