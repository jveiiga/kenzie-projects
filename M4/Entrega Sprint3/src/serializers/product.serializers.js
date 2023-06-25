import * as yup from "yup"

const createProductsSerializers = yup.object().shape({
   name: yup.string().max(100).required(),
   price: yup.number().required(),
   category_id: yup.number().positive().required()
})

export { createProductsSerializers }