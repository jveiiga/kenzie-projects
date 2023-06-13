import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { InputLogin as Input, LabelLogin as Label } from "../../../styles/inputs"
import { ContainerLogIn, FormLogin as Form, LinkRegister, TitleLogin, LogoLogIn, MessageError } from "./StyledLogIn"
import { ButtonRegister } from "../../../styles/buttons"
import { schema } from "../../../validations/validationLogIn"
import { useContext } from "react"
import { AuthContext, IContextLogin } from "../../AuthContext"
import Button from "../../../components/Buttons/Button"

const LogIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IContextLogin>({
        resolver: yupResolver(schema)
    })
    const { loginUser } = useContext(AuthContext)

    return (
        <>
            <LogoLogIn>Kenzie Hub</LogoLogIn>
            <ContainerLogIn>
                <TitleLogin>LogIn</TitleLogin>

                <Form onSubmit={handleSubmit(loginUser)}>
                    <Label htmlFor="email">Email</Label>
                    <Input

                        id="email"
                        type="email"
                        placeholder="Digite seu email cadastrado"
                        {...register("email")}
                    />

                    <MessageError>{errors.email?.message}</MessageError>

                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    <MessageError>{errors.password?.message}</MessageError>

                    <Button variant="primary">Entrar</Button>
                </Form>

                <LinkRegister to="/Register">Ainda não possui uma conta?</LinkRegister>
                <ButtonRegister to="/Register">Cadastre-se</ButtonRegister>
            </ContainerLogIn>
        </>
    )
}

export default LogIn