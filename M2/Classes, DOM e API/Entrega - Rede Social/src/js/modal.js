export class Modal {
    static mostraModal() {

        const modal = document.getElementById("modal")
 
            modal.classList.remove("hidden")
            modal.classList.add("modal")
    }
    
    static fechaModal() {
        const btnFechar = document.querySelector(".modal__btn")
            
        btnFechar.addEventListener("click", () => {
            const modal = document.querySelector(".modal")
            modal.classList.add("disappear")
    
            setTimeout(() => {
            modal.classList.remove("modal")
            modal.classList.remove("disappear")
            modal.classList.add("hidden")
            }, 1000)
        })
    }

    static renderPostModal(posts) {

        const section = document.getElementById("modal")
      
        posts.results.forEach((obj) => {
            console.log(obj)
            const img       = obj.author.image
            const usuario   = obj.author.username
            const profissao = obj.author.work_at
            const titulo    = obj.title
            const post      = obj.description

            const divModal         = document.createElement("div")
            const divUsuario       = document.createElement("div")
            const spanFlex         = document.createElement("span")
            const imgUsuario       = document.createElement("img")
            const spanTextoUsuario = document.createElement("span")
            const nomeUsuario      = document.createElement("h3")
            const profissaoUsuario = document.createElement("p")
            const btnFechar        = document.createElement("p")
            const divTitulo        = document.createElement("div")
            const h2Titulo         = document.createElement("h2")
            const divTexto         = document.createElement("div")
            const texto            = document.createElement("p")

            divModal.classList.add("modal__mensagem")
            divUsuario.classList.add("modal-user")
            spanFlex.classList.add("modal__flex__btn")
            imgUsuario.classList.add("modal__img")
            spanTextoUsuario.classList.add("modal__text__user")
            btnFechar.classList.add("modal__btn")

            imgUsuario.src             = img
            nomeUsuario.innerText      = usuario
            profissaoUsuario.innerText = profissao
            btnFechar.innerText        = "X"
            h2Titulo.innerText         = titulo
            texto.innerText            = post

            section.appendChild(divModal)
            divModal.append(divUsuario, divTitulo, divTexto)
            divUsuario.append(spanFlex, btnFechar)
            spanFlex.append(imgUsuario, spanTextoUsuario)
            spanTextoUsuario.append(nomeUsuario, profissaoUsuario)
            divTitulo.appendChild(h2Titulo)
            divTexto.appendChild(texto)

            return divModal
        })
        mostraModal()
    } 
}

