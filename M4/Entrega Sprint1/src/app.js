import express, { request, response } from "express";
import users from "./database"
import { v4 as uuidv4} from "uuid"
import { compare, hash } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"


const app = express()
app.use(express.json())

//MIDDLEWARES -> São funções que ficam entre o cliente e o controller, e podem fazer uma lógica ou verificação que estava repetitiva nos services


//Middleware de authorização do usuário
const ensureAuthMiddleware = (request, response, next) => {

    let authorization  = request.headers.authorization
    
    //verifica se o token foi enviado
    if (!authorization) {
        return response.status(401).json({
            message: "Invalid token"
        })
    }
    
    authorization = authorization.split(" ")[1]
    //verifica se o token é valido
    return jwt.verify(authorization, process.env.SECRET_KEY, (error, decoded) => {

        if (error) {

            return response.status(401).json({
                message: "Invalid token"
            })
        }

        request.user = {
            uuid: decoded.sub,
            isAdm: decoded.isAdm
        }
        
        return next()
    })
}

//Middleware de verificação de admin 
const ensureUserIsAdminMiddleware = (request, response, next) => {

    const admin  = request.user.isAdm 

    if (!admin) {
        return response.status(403).json({
            message: "User unauthorization"
        })
    }
    return next()
} 

// SERVICES -> Cuida da lógica de negócio e da manipulação de dados

// Register
const createUserService = async (userData) => {

    const userEmail = users.find((user) => user.email === userData.email)

    if (userEmail) {
        return[409, {
            message: "Email Existing"
        }]
    }

    const user = {
        uuid: uuidv4(),
        ...userData,
        password: await hash(userData.password, 10),
        createdOn: new Date(),
        updatedOn: new Date()
    }
    
    users.push(user)
    const {password:pwd, ...rest} = user
    
    return [201, rest]
}

//List users
const listUserService = () => {

    return [200, users]
}

//List user users/profile
const retrieveUserService = (userId) => {

    const user = users.find((user) => user.uuid === userId)

    const userWithoutPassword = {
        uuid: user.uuid,
        isAdm: user.isAdm,
        name: user.name,
        email: user.email,
        age: user.age,
        createdOn: user.createdOn,
        updatedOn: user.updatedOn
    }

    return [200, userWithoutPassword]
}

//Delete user 
const deleteUserService = (admin, userId, paramsId) => {

    const userIndex = users.findIndex((user) => user.uuid === paramsId)

    if (userIndex === -1) {
        return[404, {
            message: "User not found!"
        }]
    }

    if (!admin && userId !== paramsId) {
        return[403, {
            message: "Missing admin permission!"
        }]
    }

    users.splice(userIndex, 1)
    
    return [204, {}]
}

//Edit
const editUserService = (admin, userId, paramsId, userData) => {

    const userIndex = users.findIndex((user) => user.uuid === paramsId)

    if (userIndex === -1) {
        return[404, {
            message: "User not found!"
        }]
    }

    if (!admin && userId !== paramsId) {
        return[403, {
            message: "Missing admin permission!"
        }]
    }

    userData.updatedOn = new Date()
    userData.createdAt = users[userIndex].createdAt
    userData.uuid      = users[userIndex].uuid
    userData.isAdm     = users[userIndex].isAdm

    users[userIndex] = {
        ...users[userIndex], ...userData
    }

    const {password:pwd, ...rest} = users[userIndex]
    return [200, rest]
}

//Login
const createSessionService = async ({ email, password}) => {

    // Error Login Email verification
    const userData = users.find((user) => user.email === email)
    if (!userData) {

        return [401, {
            message: "Wrong email or password!"
        }]
    }

    //Error Login Password verification 
    const passwordMatch = await compare(password, userData.password)
    if (!passwordMatch) {
        
        return [401, {
            message: "Wrong email or password!"
        }]
    }
    
    //Ok Login Token  
    const token = jwt.sign(
        {isAdm: userData.isAdm},
        process.env.SECRET_KEY,
        {
            expiresIn: "24h",
            subject: userData.uuid,
        }
    )

    return [200, {token}]
}
 
// CONTROLLERS -> Recebem os dados da requisição do cliente, e retornam uma resposta para o cliente

//Register
const createUserController = async (request, response) => {

    const user           = request.body
    const [status, data] = await createUserService(user)
    
    return response.status(status).json(data)
}

//List users
const listUserController = (request, response) => {

    const [status, usersData] = listUserService()
    
    return response.status(status).json(usersData)
    
}

//List user
const retrieveUserController = (request, response) => {
 
    const userId = request.user.uuid
    const [status, data] = retrieveUserService(userId)

    return response.status(status).json(data)
}

//Delete user 
const deleteUserController = (request, response) => {

    const admin    = request.user.isAdm 
    const userId   = request.user.uuid
    const paramsId = request.params.uuid

    const [status, data] = deleteUserService(admin, userId, paramsId)

    return response.status(status).json(data)
}

//Login
const createSessionController = async (request, response) => {

    const userData       = request.body 
    const [status, data] = await createSessionService(userData)

    return response.status(status).json(data)
}

//Edit
const editUserController = (request, response) => {

    const admin    = request.user.isAdm 
    const userId   = request.user.uuid
    const paramsId = request.params.uuid
    const userData = request.body 

    const [status, data] = editUserService(admin, userId, paramsId, userData)

    return response.status(status).json(data)
}

// ROTAS
app.post("/users", createUserController)
app.post("/login", createSessionController)
app.get("/users", ensureAuthMiddleware, ensureUserIsAdminMiddleware, listUserController)
app.get("/users/profile", ensureAuthMiddleware, retrieveUserController)
app.delete("/users/:uuid", ensureAuthMiddleware, ensureUserIsAdminMiddleware, deleteUserController)
app.patch("/users/:uuid", ensureAuthMiddleware, editUserController)

app.listen(3001, () => {
    console.log("Server running in port 3001")
})

export default app
