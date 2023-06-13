import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../services/Api";

interface IUserContext {
  loadUser(data: IUserLogin): void;
  user: IUser;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModalProduct: boolean;
  setOpenModalProduct: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: () => void;
  modalClose: () => void;
  newProduct: (data: IProduct) => void;
  lista: IProduct;
  setLista: (value: React.SetStateAction<IProduct>) => void;
  setRemove: React.Dispatch<React.SetStateAction<IProduct>>;
  remove: IProduct
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  tellphone: number;
  id: number;
  products: IProduct[];
}

export interface IProduct {
  name: string;
  type: string;
  weight: null;
  city: string;
  country: string;
  image: string;
  description: string;
}

interface IUserProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

const AuthProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalProduct, setOpenModalProduct] = useState<boolean>(false);
  const [lista, setLista] = useState<IProduct>({} as IProduct);
  const [remove, setRemove] = useState<IProduct>({} as IProduct)

  useEffect(() => {
    async function loadingUser() {
      const token = localStorage.getItem("@eCOMPANY:token");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await Api.get("login");

          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
    }
    loadingUser();
  }, []);

  async function loadUser(data: IUser) {
    try {
      const response = await Api.post("/login", data);

      const { user: userResponse, accessToken } = response.data;

      localStorage.setItem("@eCOMPANY:token", accessToken);
      localStorage.setItem("@eCOMPANY:user_id", userResponse.id);
      console.log(userResponse);

      setUser(userResponse);
      toast.success("Acesso com sucesso !", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Acesso inválido", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  async function newProduct(data: IProduct) {
    const userId = localStorage.getItem("@eCOMPANY:user_id");
    try {
      const newData = { ...data, userId: Number(userId), status: true };
      await Api.post("/products", newData);
      setLista(newData);
      setOpenModalProduct(false);
    } catch (error) {
      console.log(error);
    }
  }

  const modalOpen = () => {
    setOpenModalProduct(true);
  };

  const modalClose = () => {
    setOpenModalProduct(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loadUser,
        openModal,
        setOpenModal,
        openModalProduct,
        setOpenModalProduct,
        modalOpen,
        modalClose,
        newProduct,
        setRemove,
        remove,
        lista,
        setLista,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useUserLoginContext() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;
