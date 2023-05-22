import { Api } from "./script.js"

    class CadastroUsuario {

    static renderCadastro() {
        
        const usuarioCadastro = document.getElementById("usuarioCadastro")
        const emailCadastro   = document.getElementById("emailCadastro")
        const fotoCadastro    = document.getElementById("fotoCadastro")
        const senhaCadastro   = document.getElementById("senhaCadastro")
        const btnCadastrar    = document.getElementById("btnCadastrar")

        btnCadastrar.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                    "username": usuarioCadastro.value,
                    "email": emailCadastro.value,
                    "avatarUrl": fotoCadastro.value,
                    "password": senhaCadastro.value
            }
            console.log(data)
            Api.cadastro(data)
        })
    }
}

CadastroUsuario.renderCadastro()
