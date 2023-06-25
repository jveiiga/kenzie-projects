import console from "console"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const deleteUserService = async (paramsId: string) => {
  
    const userRepository = AppDataSource.getRepository(User)
    
    const user = await userRepository.findOneBy({
        id: paramsId
    })

    if (!user) {
        throw new AppError("User not found!", 404)
    }

    if (!user.isActive) {
        console.log("Console USER ACTIVE", user)
        throw new AppError("User Inative", 400)
    }
    
    await userRepository.update(paramsId, {
        isActive: false
    })
    
    return {}
}

export default deleteUserService

// await userRepository.softRemove(user)
// const userNotActive = await userRepository.save({ ...user, isActive: false });
