import { createContext, ReactNode } from "react";
import { iUserRegister } from "../pages/Register";
import { toast } from "react-toastify";
import Api from "../services/Api";

interface iRegisterProvider {
  children: ReactNode;
}

interface iRegisterContext {
  registerUser(data: iUserRegister): void;
}

export const RegisterContext = createContext<iRegisterContext>(
  {} as iRegisterContext
);

export function RegisterProvider({ children }: iRegisterProvider) {
  function registerUser(data: iUserRegister): void {
    delete data.checkPassword;

    Api.post("register", data)
      .then(() => {
        return toast.success("Cadastrado com sucesso !", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch(() => {
        return toast.error("Cadastro inválido", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }
  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
}
