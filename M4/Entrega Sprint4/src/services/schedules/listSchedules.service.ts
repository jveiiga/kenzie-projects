import AppDataSource from "../../data-source"
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity"

const listSchedulesUsersPropertiesService = async () => {

    const scheduleRepository = AppDataSource.getRepository(Schedules_users_properties)

    const listSchedules = scheduleRepository.find()

    return listSchedules
}

export default listSchedulesUsersPropertiesService