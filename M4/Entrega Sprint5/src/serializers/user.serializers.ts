import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users"

const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    password: yup.string().required(),
    isAdm: yup.boolean().required(),    
    email: yup.string().email().required(),
    name: yup.string().required()
})

const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    password: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired()
})

const userWithoutPasswordSerializer: SchemaOf<IUser> = yup.object().shape({
    updatedAt: yup.date().notRequired(),
    createdAt: yup.date().notRequired(),
    isActive: yup.boolean().notRequired(),
    isAdm: yup.boolean().notRequired(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    id: yup.string().notRequired()
})


export { 
    userSerializer,  
    userWithoutPasswordSerializer, 
    userUpdateSerializer
}