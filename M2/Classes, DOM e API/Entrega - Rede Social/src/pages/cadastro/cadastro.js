import {Api} from "../../js/models/api.js"

let inputNome     = document.getElementById("inputNome")
let inputEmail    = document.getElementById("inputEmail")
let inputSenha    = document.getElementById("inputSenha")
let inputTrabalho = document.getElementById("inputTrabalho")
let inputImagem   = document.getElementById("inputImagem")
let btnRegistro   = document.getElementById("btnRegistro")

btnRegistro.addEventListener("click", (event) => {
    event.preventDefault()

    const data = {
        "username": inputNome.value,
        "email": inputEmail.value,
        "password": inputSenha.value,
        "work_at": inputTrabalho.value,
        "image": inputImagem.value
    }
    Api.cadastroUsuario(data)
})

