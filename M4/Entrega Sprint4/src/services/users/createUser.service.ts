import { IUserRequest, IUserResponse } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers"

const createUserService = async (userData: IUserRequest):Promise<IUserResponse> => {
   
    const userRepository = AppDataSource.getRepository(User) 

    const { name } = userData
    
    const user = await userRepository.findOneBy({
        name: name
    })

    if (user) {
        throw new AppError("User already exists", 400)
    } 

    const createdUser = userRepository.create(userData)
    createdUser.isActive = true

    await userRepository.save(createdUser)

    const userWithoutPassword = await userWithoutPasswordSerializer.validate(createdUser, {
        stripUnknown: true,
    })
    
    return userWithoutPassword
}

export default createUserService