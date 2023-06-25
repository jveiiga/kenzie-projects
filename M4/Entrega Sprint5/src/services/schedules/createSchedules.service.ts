import { IScheduleRequest } from "../../interfaces/schedules"
import AppDataSource from "../../data-source"
import { Schedules_users_properties } from "../../entities/schedules_users_properties.entity"
import Properties from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"

const createSchedulesUsersPropertiesService = async (schedulesData: IScheduleRequest,userId: string): Promise<Schedules_users_properties> => {

  const propertyRepository = AppDataSource.getRepository(Properties);
  const scheduleRepository = AppDataSource.getRepository(Schedules_users_properties)

  const property = await propertyRepository.findOneBy({
    id: schedulesData.propertyId,
  })

 
  const scheduleDate = await scheduleRepository.findOneBy({
    date: schedulesData.date,
  })

  const scheduleHour = await scheduleRepository.findOneBy({
    hour: schedulesData.hour
  })   
 
  const propertyId = await propertyRepository.findOneBy({
    id: schedulesData.propertyId
  })

  const convertedHour = schedulesData.hour
  const hour = convertedHour.slice(0,2)

    if (!propertyId) {
        throw new AppError ("Property not found!", 404)
    }

    // console.log("console  schedulesData.hour", schedulesData.hour) 
    // console.log("console  scheduleHour", scheduleHour) 

    const date = new Date(schedulesData.date)
    const newDate = date.getDay()

    if (newDate < 1 || newDate > 5) {
      throw new AppError ("não permitido!", 400)
    }

    if (parseInt(hour) < 8 || parseInt(hour) >= 18) {
        throw new AppError ("Scheduling not allowed!", 400)
    }

    if (scheduleDate && scheduleHour) {
      throw new AppError ("Schedule already exists!", 409)
    }
     
  const newSchedule = scheduleRepository.create({

    ...schedulesData,
    property,
  })

  await scheduleRepository.save(newSchedule);

  return newSchedule;
}

export default createSchedulesUsersPropertiesService
