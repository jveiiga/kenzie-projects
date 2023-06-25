import { Request, Response, NextFunction } from "express"
import  jwt  from "jsonwebtoken"
import "dotenv/config"

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {

        if (error) {
            res.status(401).json({
                message: error.message
            })
        }
        //adicionando dados na requisição
        req.user = {
            id: decoded.sub,
            isAdm: decoded.isAdm,
            name: decoded.name
        }
        // console.log(req.user)
        return next()
    })
}

export default ensureAuthMiddleware