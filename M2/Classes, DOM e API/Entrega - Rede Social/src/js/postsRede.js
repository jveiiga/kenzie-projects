import { Modal } from "./modal.js"

export class PostsDaRede {

    static cardPosts(posts) {
  
        const ul = document.querySelector(".main__conteudoPosts")
      
        const postsReverse = posts.results.reverse()
        postsReverse.forEach((obj) => {
     
            const img       = obj.author.image
            const usuario   = obj.author.username
            const profissao = obj.author.work_at
            const titulo    = obj.title
            const post      = obj.description
            const likes     = obj.likes.length
            
            const li               = document.createElement("li")
            const spanPrincipal    = document.createElement("span")
            const imgUsuario       = document.createElement("img")
            const span             = document.createElement("span")
            const nomeUsuario      = document.createElement("h3")
            const profissaoUsuario = document.createElement("p")
            const divTitulo        = document.createElement("div")
            const h2               = document.createElement("h2")
            const divPost          = document.createElement("div")
            const textoPost        = document.createElement("p")
            const spanInteracao    = document.createElement("span")
            const buttonModalPost  = document.createElement("button")
            const imgLike          = document.createElement("img")
            const numeroLikes      = document.createElement("p")

            li.classList.add("main__lista")
            spanPrincipal.classList.add("main__conteudoSugestao")
            imgUsuario.classList.add("main__usuarioImg")
            imgLike.classList.add("main__hearth")
            span.classList.add("main__conteudo--NomeProfissao")
            nomeUsuario.classList.add("main__nomeUsuario--sugestao")
            profissaoUsuario.classList.add("main__profissaoUsuario--sugestao")
            divTitulo.classList.add("main__conteudoPosts--titulo")
            divPost.classList.add("main__conteudoPosts-texto")
            spanInteracao.classList.add("main__btn--like")
            buttonModalPost.classList.add("button-black")

            imgUsuario.src             = img
            imgLike.src = `/src/assets/heartBlack.png`
            nomeUsuario.innerText      = usuario
            profissaoUsuario.innerText = profissao
            h2.innerText               = titulo
            textoPost.innerText        = post
            buttonModalPost.innerText  = "abrir post"
            numeroLikes.innerText      = likes

            ul.appendChild(li)
            li.append(spanPrincipal, divTitulo, divPost, spanInteracao)
            spanPrincipal.append(imgUsuario, span)
            span.append(nomeUsuario, profissaoUsuario)
            divTitulo.appendChild(h2)
            divPost.appendChild(textoPost)
            spanInteracao.append(buttonModalPost, imgLike, numeroLikes)

            buttonModalPost.addEventListener("click", (event) => {
                event.preventDefault()
            
                Modal.renderPostModal(obj)
    
                // modal.classList.remove("hidden")
                // modal.classList.add("modal")

    
            })

            return li
        });
    }

    static async criandoPost() {

        const inputTitulo = document.querySelector(".main__inputTitulo")
        const inputPost   = document.querySelector(".main__inputPost")
        const btnPost     = document.querySelector(".main__btnPost")

        btnPost.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                "title": inputTitulo.value,
                "description": inputPost.value,
            }
            Api.novoPost(data)
        })
    }
}

