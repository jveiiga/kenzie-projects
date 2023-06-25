import { Request, Response } from "express"
import { IScheduleRequest } from "../interfaces/schedules"
import createSchedulesUsersPropertiesService from "../services/schedules/createSchedules.service"
import listSchedulesByIdPropertyService from "../services/schedules/listSchedulesByIdProperty.service"

const createSchedulesController = async (req: Request, res: Response) => {
  
  const schedules: IScheduleRequest = req.body
  const id = req.user.id
  // const propertyId = req.body.propertyId

  const schedule = await createSchedulesUsersPropertiesService(schedules, id);

  return res.status(201).json({
    schedule,
    message: "agendamento criado com sucesso!",
  })
}

const listSchedulesByIdPropertyController = async (req: Request,res: Response) => {

  const propertyId: string = req.params.id;

  const listSchedules = await listSchedulesByIdPropertyService(propertyId)

  return res.status(200).json(listSchedules);
}

export {
  createSchedulesController,
  listSchedulesByIdPropertyController
}
