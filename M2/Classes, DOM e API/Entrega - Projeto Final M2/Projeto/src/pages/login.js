import { Api } from "../js/models/Api.js"

const token = localStorage.getItem("@kenzieEmpresas:token")

// if(token) {
//     window.location.replace("./src/pages/dashboard-user.html")
// }

const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")
const btnLogin   = document.querySelector(".btnLogin")

btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    const data = {
        "email": inputEmail.value,
        "password": inputSenha.value
    }
    Api.loginUsuarios(data)
})