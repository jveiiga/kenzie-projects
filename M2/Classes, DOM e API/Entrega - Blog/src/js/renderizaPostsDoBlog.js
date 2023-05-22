import { Api } from "./script.js"

export class PostsBlog {

    static renderPostsBlog(postsBlog) {

        let listaPosts = document.querySelector("ul")
        postsBlog.data.forEach((posts) => {

            let card = PostsBlog.cardPost(posts)
            listaPosts.appendChild(card)
        })
    }

    static cardPost(posts) {
   
        let imagem   = posts.user.avatarUrl
        let dataPost = posts.createdAt
        let dataBrasil = new Date(dataPost)
        let conteudoPost   = posts.content
        let id       = posts.id
        let usuario  = posts.user.username

        let li           = document.createElement("li")
        let divContainer = document.createElement("div")
        let imgUser      = document.createElement("img")
        let divTexto     = document.createElement("div")
        let h2           = document.createElement("h2")
        let p            = document.createElement("p")
        let span         = document.createElement("span")
        let divImagem    = document.createElement("div")
        let imgEditar    = document.createElement("img")
        let imgDeletar   = document.createElement("img")

        li.classList.add("container__post")
        divContainer.classList.add("container__post__conteudo")
        imgUser.classList.add("container__img__post")
        divTexto.classList.add("container__post__texto")
        span.classList.add("container__data__post")
        divImagem.classList.add("container__imagens")
        imgEditar.classList.add("container__img--edit")
        
        imgUser.src    = imagem
        h2.innerText   = usuario
        p.innerText    = conteudoPost
        span.innerText = dataBrasil
        imgEditar.src  = `../assets/image/editImg.png`
        imgDeletar.src = `../assets/image/deleteImg.png`

        li.append(divContainer, divImagem)
        divContainer.append(imgUser, divTexto, span)
        divImagem.append(imgEditar, imgDeletar)
        divTexto.append(h2, p)

        return li
    }

    static mostraModal() {

        let modalBtn = document.querySelector(".container__img--edit")
        let modal = document.querySelector(".secao")
        
        modalBtn.addEventListener("click", () => {
            modal.classList.add("modal")
    
        })
    }
    
    static fechaModal() {
        let btnFechar = document.querySelector(".modal__btn")
            
        btnFechar.addEventListener("click", () => {
            let modal = document.querySelector(".modal")
            modal.classList.add("disappear")
    
            setTimeout(() => {
                modal.remove()
            }, 1000)
        })
    }
}
let posts = await Api.buscaPosts()
PostsBlog.renderPostsBlog(posts)

PostsBlog.mostraModal()
PostsBlog.fechaModal()
