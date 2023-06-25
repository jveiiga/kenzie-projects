import AppDataSource from "../../data-source"
import Properties from "../../entities/properties.entity"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertiesService = async (propertyData: IPropertyRequest) => {

    console.log("chegou aqui")
    console.log(propertyData)
    const propertyRepository = AppDataSource.getRepository(Properties)

    

   

    

}

export default createPropertiesService