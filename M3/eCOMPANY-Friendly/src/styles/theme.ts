import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    mainn: "#1F211F",
    ellipse: "#1A2E1F",
    logo: "#5EFFA8",
    buttongreen: "#1A2E1F",
    btnRegister: "#1A2E1F",
    question: "#5EFFA8",
    containerdash: "rgba(0, 0, 0, 0.45)",
    maindash: "#1F211F",
    btncollect: "#1A2E1F"
}

export const lightTheme: DefaultTheme = {
    mainn: "#F1F1F1",
    ellipse: "rgba(66, 134, 83, 0.8)",
    logo: "#1A2E1F",
    buttongreen: "#428653",
    btnRegister: "#428653",
    question: "#1F211F",
    containerdash: "rgba(255, 255, 255, 0.7)",
    maindash: "#AEB4B7",
    btncollect: "#428653"
}

export const themes = {
    dark: darkTheme,
    light: lightTheme
}
