import * as yup from "yup"

export const schema = yup.object({
    email: yup.string()
        .email("Deve ser um email válido")
        .required("Email é obrigatório"),
    password: yup.string()
        .min(6, "A senha deve conter no minimo 6 caracteres")
        .required("Senha é obrigatório")
})