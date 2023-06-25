import * as yup from "yup";

const createCategorySerializers = yup.object().shape({
  name: yup.string().max(100).required()
});

export default createCategorySerializers 