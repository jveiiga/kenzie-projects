import { threadId } from "worker_threads"
import AppDataSource from "../../data-source"
import Properties from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"

//Listando agendamento por propriedade
const listSchedulesByIdPropertyService = async (paramsId: string) => {

console.log(paramsId)

const propertyRepository = AppDataSource.getRepository(Properties)

const property = await propertyRepository 
.createQueryBuilder("properties")
.where("properties.id = :id", { id: paramsId })
.getOne()

if (!property) {
    throw new AppError("propriedade não existe", 404)
}

const schedulesProperty = await propertyRepository
.createQueryBuilder("properties")
.leftJoinAndSelect("properties.schedules", "schedules_users_properties")
.leftJoinAndSelect("schedules_users_properties.user", "users")
.leftJoinAndSelect("properties.address", "addresses")
.leftJoinAndSelect("properties.category", "categories")
.where("properties.id = :id", { id: paramsId })
.getOne()

 return schedulesProperty
}

export default listSchedulesByIdPropertyService