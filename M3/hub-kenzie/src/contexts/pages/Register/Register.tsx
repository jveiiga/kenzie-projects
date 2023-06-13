import Header from "../../../components/Header/Header"
import Button from "../../../components/Buttons/Button"
import { AuthContext, IContextRegister } from "../../AuthContext"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../../../validations/validationRegister"
import { InputRegister as Input, LabelRegister as Label, SelectRegister as Select } from "../../../styles/inputs"
import { StyledCaption as Caption, StyledContainer as Container, StyledError as MessageError, StyledForm as Form, StyledTitle as Title } from "./StyledRegister"

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IContextRegister>({
        resolver: yupResolver(schema)
    })
    const { registerUser } = useContext(AuthContext)

    return (
        <>
            <Header />
            <Container>
                <Title>Crie sua conta</Title>
                <Caption>Rapido e grátis, vamos nessa</Caption>
                <Form onSubmit={handleSubmit(registerUser)}>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Digite aqui seu nome"
                        {...register("name")}

                    />
                    <MessageError>{errors.name?.message}</MessageError>

                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Digite aqui seu email"
                        {...register("email")}
                    />
                    <MessageError>{errors.email?.message}</MessageError>

                    <Label htmlFor="password">Senha</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Digite aqui sua senha"
                        {...register("password")}
                    />
                    <MessageError>{errors.password?.message}</MessageError>

                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                    <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Digite novamente sua senha"
                        {...register("confirmPassword")}
                    />
                    <MessageError>{errors.password?.message}</MessageError>

                    <Label htmlFor="bio">Bio</Label>
                    <Input
                        id="bio"
                        type="text"
                        placeholder="Fale sobre você"
                        {...register("bio")}
                    />
                    <MessageError>{errors.bio?.message}</MessageError>

                    <Label htmlFor="contact">Contato</Label>
                    <Input
                        id="contact"
                        type="text"
                        placeholder="Opções de contato"
                        {...register("contact")}
                    />
                    <MessageError>{errors.contact?.message}</MessageError>

                    <Label>Selecionar módulo</Label>
                    <Select id="select" {...register("course_module")}>
                        <option>-</option>
                        <option value="Terceiro Módulo(Frontend avançado)">Terceiro Módulo (Frontend avançado)</option>
                    </Select>
                    <MessageError>{errors.course_module?.message}</MessageError>
                    <Button variant="negative">Cadastrar</Button>
                </Form>
            </Container>
        </>
    )
}

export default Register