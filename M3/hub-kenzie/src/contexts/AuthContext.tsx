import { createContext, ReactNode, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

interface IContextChildren {
    children: ReactNode;
}

export interface IContextUser {
    avatar_url: null;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    email: string;
    id: string;
    name: string;
    techs: IContextTechs;
    updated_at: string;
    works: [];
}

interface IContextTechs {
    id: string;
    title: string;
    status: string,
}

export interface IContextLogin {
    email: string;
    password: string;
    loginUser: (data: IContextLogin) => void;
}

export interface IContextRegister {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    bio: string;
    contact: string;
    course_module: string;
    select: string;
    registerUser: (data: IContextRegister) => void;
}


interface IContextExport {
    loginUser: (data: IContextLogin) => void;
    user: IContextUser | null;
    loading: boolean;
    tech: IContextTechs[];
    setTech: React.Dispatch<React.SetStateAction<IContextTechs[]>>;
    registerUser: (data: IContextRegister) => void;
    deleteTechnologies: (id: string) => void;
    setReload: React.Dispatch<React.SetStateAction<number>>;
    reload: number;
}

export const AuthContext = createContext({} as IContextExport)

const AuthProvider = ({ children }: IContextChildren) => {

    const navigate              = useNavigate()
    const [user, setUser]       = useState<IContextUser | null>(null)
    const [loading, setLoading] = useState(true)
    const [tech, setTech]       = useState([] as IContextTechs[])
    const [reload, setReload]   = useState(0)
     
    useEffect(() => {

        const loadUser = async () =>  {
           
            const token = localStorage.getItem("@kenzieHubContext: token")

            if (token) {

                try {
         
                    api.defaults.headers.authorization = `Bearer ${token}`

                    const { data } = await api.get("profile")
                    
                    setTech(data.techs)
                    
                    setUser(data)
                    
                } catch (error) {

                    console.error(error)
                }
            }
            setLoading(false)
        } 
        loadUser()
     },[reload])

    const loginUser = async (data: IContextLogin) => {

        try {   
                //resposta login
                const res = await api.post("sessions", data)
                //toast
                toast.success(`Olá! ${res.data.user.name}.`)
                //usuário
                const {user: userRes, token} = res.data
                //token
                api.defaults.headers.authorization = `Bearer ${token}`
                //estado
                setUser(userRes)
                //localStorage:token
                localStorage.setItem("@kenzieHubContext: token", token)
                //navegação
                navigate("/Dashboard", { replace: true })
            } catch (error) {
                // toast erro
                toast.error("Ops! Algo deu errado")
                console.error(error)
            }
    }

    const registerUser = async (data: IContextRegister) => {    
   
        try {
            //registrando usuário
            await api.post("users", data)
            //navegando login
            navigate("/logIn")
            //toast sucesso
            toast.success("Conta criada com sucesso!")
        }
        catch (error) {
            //toast erro
            toast.error("Ops! Algo deu errado")
            console.error(error)
        }
    }

    const deleteTechnologies = async (id: string ) => {
            console.log(id)
            await api.delete(`users/techs/${id}`)
            
            const newTechList = tech.filter((removeTech) => removeTech.id !== id) 

            setTech(newTechList)

            setReload(reload + 1)
    }
    
    return (
        <>
            <AuthContext.Provider value={{ 
                loginUser, 
                user, 
                loading, 
                tech, 
                setTech, 
                registerUser, 
                deleteTechnologies, 
                setReload, 
                reload 
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider