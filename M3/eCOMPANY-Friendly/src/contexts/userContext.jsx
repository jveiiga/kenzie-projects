import { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

interface iUserProvider {
  children: ReactNode;
}

interface iLogin {
  email: string;
  password: string;
}

interface iRegister {
  name: string;
  email: string;
  image: string;
  password: string;
  tellphone: string;
}

export interface iUserContext {
  login: (data: iLogin) => void;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: void;
  formSubmit: Promise<void>
}



export const UserProvider = ({ children }: iUserProvider) => {
  const [modalIsOpen, setModalIsOpen] = useState<iUserContext | boolean>(false);
  const token = localStorage.getItem("@eCOMPANY:token");
  const id = localStorage.getItem("@eCOMPANY:user_id");
  const navigate = useNavigate();

  const login = async (data: iLogin) => {
    try {
      const res = await Api.post("login", data);
      return res;
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };


  async function formSubmit(data): Promise<void> {
    console.log(data);
    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;
      await Api.patch(`/products/${id}`, data);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  function openModal(): void {
    setModalIsOpen(true);
  }
  function closeModal(): void {
    setModalIsOpen(false);
  }

  /*const register = async (data: iRegister) => {
    try {
      const res = await Api.post("/register", data);
      console.log(await res);
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };*/

  return (
    <UserContext.Provider value={{
      login,
      openModal,
      closeModal,
      formSubmit,
      modalIsOpen,
    }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(UserContext);

  return context;
}
