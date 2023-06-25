import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import { IUserRequest, IUserUpdate } from "../interfaces/users"
import createUserService from "../services/users/createUser.service"
import listUsersService from "../services/users/listUsers.service"
import deleteUserService from "../services/users/deleteUser.service"
import updateUserService from "../services/users/updateUser.service"

const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {

    const users = await listUsersService()

    return res.json(instanceToPlain(users))
}

const deleteUserController = async (req: Request, res: Response) => {

    const paramsId      = req.params.id
   
    const idToBeDeleted =  await deleteUserService(paramsId)

    return res.status(204).json(idToBeDeleted)
}

const updateUserController = async (req: Request, res: Response) => {

    const userData: IUserUpdate = req.body
    const tokenUserId           = req.user.id
    const paramsId              = req.params.id

    const updateUser            = await updateUserService(userData, paramsId, tokenUserId, req.user.isAdm) 

    return res.status(200).json(updateUser)
}


export {
    createUserController, 
    listUsersController,
    deleteUserController,
    updateUserController
}

