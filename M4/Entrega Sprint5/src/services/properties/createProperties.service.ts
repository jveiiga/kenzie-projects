import AppDataSource from "../../data-source"
import Addresses from "../../entities/addresses.entity."
import Categories from "../../entities/categories.entity"
import Properties from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertiesService = async (propertyData: IPropertyRequest) => {

    const propertyRepository = AppDataSource.getRepository(Properties)
    const addressRepository  = AppDataSource.getRepository(Addresses)
    const categoryRepository = AppDataSource.getRepository(Categories)

    if (propertyData.address.state.length > 2) {
        throw new AppError("cannot create with more than 2 digits",400)
    }

    if (propertyData.address.zipCode.length > 8) {
        throw new AppError("cannot create with more than 8 digits",400)
    }

    const findCategory = await categoryRepository.findOneBy({
        id: propertyData.categoryId
    })

    if (!findCategory) {
        throw new AppError("category not found!",404)
    }

    const findAddress = await addressRepository.findOneBy({
        district: propertyData.address.district,
        zipCode: propertyData.address.zipCode,
        number: propertyData.address.number,
        city: propertyData.address.city,
        state: propertyData.address.state
    })

    if (findAddress) {
        throw new AppError("address exist!",409)
    }

    const addressProperty = addressRepository.create(propertyData.address)
    await addressRepository.save(addressProperty)
  
    const createdProperty = propertyRepository.create({
        value: propertyData.value,
        size: propertyData.size,
        address: addressProperty,
        category: findCategory
    })
    await propertyRepository.save(createdProperty)

    return createdProperty
}   

export default createPropertiesService