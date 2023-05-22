import { Api } from "./script.js"

class PaginaLogin {

    static renderPaginaLogin() {

        const token = localStorage.getItem("@kenzieBlog:token")

        if(token) {
            window.location.assign("../../src/pages/blog.html")
        }

        const emailInput = document.getElementById("emailInput")
        const senhaInput = document.getElementById("senhaInput")
        const btnLogin   = document.getElementById("btnEntrar")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                "email": emailInput.value,
                "password": senhaInput.value,
              }
              Api.login(data)
        })
    }
}

PaginaLogin.renderPaginaLogin()