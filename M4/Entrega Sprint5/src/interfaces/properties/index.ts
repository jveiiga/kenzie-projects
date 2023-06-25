
export interface IAddressRequest {
    district: string
    zipCode: string
    number?: string
    city: string
    state: string
}

export interface IPropertyRequest {
    sold?: boolean
    value: number
    size: number
    address: IAddressRequest
    categoryId: string
}