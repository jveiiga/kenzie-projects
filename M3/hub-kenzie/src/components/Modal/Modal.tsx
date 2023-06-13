import api from "../../services/api"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useForm } from "react-hook-form"
import {MdClose} from "react-icons/md"
import { Form, Header, ModalRegister } from "./StyledModal"
import Button from "../Buttons/Button"

interface IModalProps {
    handleModal: () => void;
}

interface IModalRegister {
    id: string;
    title: string;
    status: string;
}

const Modal = ({ handleModal }: IModalProps) => {

    const {tech, setTech, setReload, reload} = useContext(AuthContext)
 
    const {register, handleSubmit, reset} = useForm<IModalRegister>({})

    const registerData = async (data: IModalRegister) => {
    
        try {
            
            await api.post(`users/techs`, data)

            setTech([...tech, data])
            setReload(reload + 1)
            reset()
            
        } catch (error) {

            console.error(error)

        }
    } 

    return (
        <ModalRegister>
            <div className="overlay">
                <Form
                    className="content"
                    onSubmit={handleSubmit(registerData)}
                >
                    <Header>
                        <h2>Cadastrar Tecnologia</h2>
                        <button 
                            className="close"
                            onClick={() => handleModal()}
                        >
                            <MdClose size={20}/>
                        </button>
                    </Header>
                    <div className="data-tech">
                        <label className="label1">Nome</label>
                        <input
                            className="input1"
                            id="name-tech"
                            type="text"
                            {...register("title")}
                        />
                        <label className="label2">Selecionar status</label>
                        <select
                            className="input2"
                            id="status"
                            {...register("status")}
                        >
                            <option>-</option>
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </select>
                    </div>
                    <Button 
                        className="button"
                        variant="primary"
                    >
                        Cadastrar Tecnologia
                    </Button>
                </Form>
            </div>
        </ModalRegister>
    )    
}

export default Modal