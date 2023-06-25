import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureUserNotExists = async (req: Request, res: Response, next: NextFunction ) => {
    const userRepository = AppDataSource.getRepository(User)

    const { id } = req.params

    const user = await userRepository.findOneBy({
        id
    })
    
    if (!user) {
        throw new AppError("User not found!", 404)
    }

    // if (!user.isActive) {
    //     throw new AppError("User Inative", 400)
    // }
    next()
}

export default ensureUserNotExists