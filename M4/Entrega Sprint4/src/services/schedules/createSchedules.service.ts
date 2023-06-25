import { IScheduleRequest } from "../../interfaces/schedules"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity"
import Properties from "../../entities/properties.entity"

const createSchedulesUsersPropertiesService = async (schedulesData:IScheduleRequest, userId: string): Promise<Schedules_users_properties> => {

    const propertyRepository = AppDataSource.getRepository(Properties)
    const scheduleRepository = AppDataSource.getRepository(Schedules_users_properties)

    const property = await propertyRepository.findOneBy({
        id: userId
    })

    const newSchedule = scheduleRepository.create({
        ...schedulesData,
        property
    })
    await scheduleRepository.save(newSchedule)

    return newSchedule
}

export default createSchedulesUsersPropertiesService