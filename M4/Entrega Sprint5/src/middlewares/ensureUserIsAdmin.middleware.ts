import { Request, Response, NextFunction } from "express"

const ensureUserIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const admin = req.user.isAdm

    if (!admin) {
         res.status(403).json({
            message: "Administrator permission is missing!"
         })
    }

    next()
}

export default ensureUserIsAdminMiddleware