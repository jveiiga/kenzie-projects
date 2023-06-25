import AppDataSource from "../../data-source"
import Properties from "../../entities/properties.entity"

const listPropertiesService = async () => {

    const propertyRepository = AppDataSource.getRepository(Properties)

    const listProperties = await propertyRepository.find()

    return listProperties
}

export default listPropertiesService