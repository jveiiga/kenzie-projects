import { Api } from "./src/js/models/api.js"

const token = localStorage.getItem("@kenzieRede:token")

// if(token) {
//     window.location.replace("../pages/rede/rede.html")
// }

const inputEmail    = document.getElementById("inputEmail")
const inputPassword = document.getElementById("inputPassword")
const btnLogin      = document.getElementById("btnLogin")

btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    const data = {
        "email": inputEmail.value,
        "password": inputPassword.value,    
    }
    Api.loginUsuario(data)
})






