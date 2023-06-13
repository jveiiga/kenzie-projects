import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import CardTechnologies from "../../../components/CardTechnologies/CardTechnologies"
import ListTechnologies from "../../../components/ListTechnologies/ListTechnologies"
import Modal from "../../../components/Modal/Modal"
import { AuthContext } from "../../AuthContext"
import { ButtonGoOut } from "../../../styles/buttons"
import { ContainerInfoUser, Header, Logo, StatusCourse, UserName } from "./StyledDashboard"

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [modaIsOpen, setModaIsOpen] = useState(false)

    const handleModal = () => {

        setModaIsOpen(!modaIsOpen)
    }

    const handleLogOut = () => {

        localStorage.removeItem("@kenzieHubContext: token")
        navigate("/")

    }

    return (
        <>
            <Header>
                <Logo>Kenzie Hub</Logo>
                <ButtonGoOut
                    onClick={() => handleLogOut()}
                >
                    Sair
                </ButtonGoOut>
            </Header>
            <ContainerInfoUser>
                {/* verificar se esse ponto de interrogação está certo */}
                <UserName>{`Olá, ${user?.name}`}</UserName>
                <StatusCourse>{user?.course_module}</StatusCourse>
            </ContainerInfoUser>
            {
                modaIsOpen === true
                    ?
                    <Modal handleModal={handleModal} />
                    :
                    <>
                    </>
            }
            <ListTechnologies handleModal={handleModal}>
                <CardTechnologies />
            </ListTechnologies>
        </>
    )
}

export default Dashboard