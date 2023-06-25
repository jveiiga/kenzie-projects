import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";

const ensureUserIsActive = async (req: Request, res: Response, next: NextFunction ) => {
    const userRepository = AppDataSource.getRepository(User)

    const { id } = req.params

    const user = await userRepository.findOneBy({
        id
    })
    console.log(user.isActive)
    if (user && !user.isActive) {
        throw new AppError("User Inative", 400)
    }
    next()
}

export default ensureUserIsActive