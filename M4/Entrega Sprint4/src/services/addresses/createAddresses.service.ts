import AppDataSource from "../../data-source"
import Addresses from "../../entities/addresses.entity."
import { IAddressRequest } from "../../interfaces/properties"

const createAddressesService = async (addressesData: IAddressRequest) => {

    const addressesRepository = AppDataSource.getRepository(Addresses)

    const address = addressesRepository.create(addressesData)

    await addressesRepository.save(address)

    return address
}

export default createAddressesService