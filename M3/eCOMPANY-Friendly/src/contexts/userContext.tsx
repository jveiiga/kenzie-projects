import { createContext, ReactElement, ReactNode } from "react";
import Api from "../services/Api";
import { toast } from "react-toastify";

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

interface iUserContext {
  login: (data: iLogin) => void;
}

export const UserProvider = ({ children }: iUserProvider) => {
  const login = async (data: iLogin) => {
    try {
      const res = await Api.post("login", data);
      return res;
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  };

  const register = async (data: iRegister) => {
    try {
      const res = await Api.post("/register", data);
      console.log(await res);
    } catch (error) {
      toast.error("Algo deu errado");
    }
  };

  return (
    <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
  );
};
