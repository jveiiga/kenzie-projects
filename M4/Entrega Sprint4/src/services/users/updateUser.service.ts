import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IUserResponse, IUserUpdate } from "../../interfaces/users"
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers"

const updateUserService = async (userData: IUserUpdate, paramsId: string, tokenUserId: string, isAdm: boolean): Promise<IUserResponse> => {
 
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({ where: {id: paramsId }})
    // console.log(user)
    if (!user) {
        throw new AppError("User not found!", 404)
    }

    if (!user.isActive) {
        throw new AppError("User Inative", 401)
    }
    
    if (userData.email && userData.password && userData.name) {

        const updateUser = userRepository.create({
            ...user,
            ...userData
        })
    
        await userRepository.save(updateUser)
    
        const updateUserWithoutPassword = await userWithoutPasswordSerializer.validate(updateUser, {
            stripUnknown: true
        })
    
        return updateUserWithoutPassword
    }

    throw new AppError("Body content forbidden", 401)
    

}

export default updateUserService