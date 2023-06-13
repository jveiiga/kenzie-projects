import { useForm } from "react-hook-form";

import {
  BackgroundForm,
  BtnComeBack,
  Company,
  Container,
  FormStyle,
  Logo,
} from "./styles";
import ecology from "../../assets/Logo.svg";
import waste from "../../assets/Waste management-pana 2.svg";
import { schema } from "../../validations/registerUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { RegisterContext } from "../../contexts/registerContext";
import { themes } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import Toggle from "../../components/Toggle";

export interface iUserRegister {
  name: string;
  email: string;
  password: string;
  checkPassword?: string;
  tellphone: string;
  image?: string;
}

const Register = () => {
  const { registerUser } = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({
    resolver: yupResolver(schema),
  });

  const [theme, setTheme] = useState<"dark" | "light">('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <ThemeProvider theme={themes[theme]} >
    <>
    <ToastContainer />
        <BackgroundForm >

          <div className="ellipse">
          <div className="logo">
            <div className="logo-container">
              <img className="logo-image" src={ecology} alt="" />
            </div>
              <Logo>eCOMPANY Friendly</Logo>
            <div className="toggle">
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          </div>
  
            <Company src={waste} alt="" />
            
          <Container>
            <FormStyle>

            <form onSubmit={handleSubmit(registerUser)}>
      
              <BtnComeBack to={"/"}>Voltar</BtnComeBack>
              <input
                type="text"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              <span>{errors.name?.message}</span>
              <input
                type="text"
                placeholder="Digite seu email"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
              <input
                type="password"
                placeholder="Confirme sua senha"
                {...register("checkPassword")}
              />
              <span>{errors.checkPassword?.message}</span>
              <input
                type="text"
                placeholder="Digite seu contato"
                {...register("tellphone")}
              />
              <span>{errors.tellphone?.message}</span>
  
              <input
                type="text"
                placeholder="Digite sua url para foto de perfil"
                {...register("image")}
              />
  
              <button 
              type="submit">Cadastre-se</button>
            </form>
          </FormStyle>
      </Container>
        </BackgroundForm>
    </>
    </ThemeProvider>
  );
};

export default Register;
