import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext, IUserLogin } from "../../contexts/authContext";
import { schemaLogin } from "../../validations/loginUser";
import {
  Container,
  Company,
  FormStyle,
  BackgroundForm,
  DivWelcome,
  Logo,
} from "./styles";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ecology from "../../assets/Logo.svg";
import waste from "../../assets/Waste management-pana 2.svg";
import { ThemeProvider } from "styled-components";
import "./styles"
import Toggle from "../../components/Toggle";
import { ToggleContainer } from "../../components/Toggle/styles";
import { themes } from "../../styles/theme";

const Login = () => {
  const { loadUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(schemaLogin) });
  
  //<span>{errors.password?.message}</span>
  
  //<LoginStyle toggleThemeLogin={toggleThemeLogin}/>
  
  const [theme, setTheme] = useState<"dark" | "light">('dark');
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  
  return (
    
    <ThemeProvider theme={themes[theme]}>
      <>
        <ToastContainer />
        <BackgroundForm>
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
              <form onSubmit={handleSubmit(loadUser)}>
                <DivWelcome>
                  <h2 className="display">Bem vindo(a) de volta</h2>
                  <h2 className="display">
                    Por favor, insira seus dados de login
                  </h2>
                </DivWelcome>

                <input
                  type="text"
                  placeholder="Digite seu email"
                  {...register("email")}
                />

                <input
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                />

                <button type="submit">Entrar</button>
                <h2 className="account">Ainda não possui uma conta?</h2>
                <Link to={"/register"} className="link">
                  Cadastre-se
                </Link>
              </form>
            </FormStyle>
          </Container>
        </BackgroundForm>
      </>
    </ThemeProvider>
  );
};

export default Login;
