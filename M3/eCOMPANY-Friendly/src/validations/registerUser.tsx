import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Conter no mínimo 8 caracteres."
    ),
  checkPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes, por favor confirmar"),
  tellphone: yup.string().required("Contato obrigatório"),
  image: yup.string(),
});
