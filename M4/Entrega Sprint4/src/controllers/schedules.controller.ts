import { Request, Response } from "express"
import { IScheduleRequest } from "../interfaces/schedules"
import createSchedulesUsersPropertiesService from "../services/schedules/createSchedules.service"
import listSchedulesUsersPropertiesService from "../services/schedules/listSchedules.service"

const createSchedulesUsersPropertiesController = async (req: Request, res:Response ) => {

    const schedules: IScheduleRequest = req.body
    const id                          = req.user.id

    const newSchedules = await createSchedulesUsersPropertiesService(schedules, id)

    return res.status(201).json(newSchedules)
}

const listSchedulesUsersPropertiesController = async (req:Request, res:Response) => {

    const schedules = listSchedulesUsersPropertiesService()

    return res.status(200).json(schedules)
}

export { createSchedulesUsersPropertiesController, listSchedulesUsersPropertiesController }