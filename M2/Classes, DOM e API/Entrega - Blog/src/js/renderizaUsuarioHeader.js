import { Api } from "./script.js"

class Header {

    static renderLogOut() {

        let btnLogOut = document.getElementById("btnLogOut")
        
        btnLogOut.addEventListener("click", (event) => {
             event.preventDefault()
    
             localStorage.removeItem("@kenzieBlog:token");
             window.location.assign("../../index.html")
        })
     } 

    static async idUsuario() {

        let id = localStorage.getItem("@kenzieBlog:User_id")
        
        return await Api.listaUsuario(id)

    }

    static renderUsuarioHeader(usuario) {
    
        let imagem      = usuario.avatarUrl
        let usuarioNome = usuario.username
    
        let imgElementoHeader = document.getElementById("imgElementoHeader")

        let img         = document.createElement("img")
        let textoHeader = document.createElement("figcaption")

        img.classList.add("imgHeader")
        textoHeader.classList.add("textoHeader")

        img.src               = imagem
        img.alt               = ""
        textoHeader.innerText = usuarioNome

        imgElementoHeader.append(img, textoHeader)  
    }
}

Header.renderLogOut()
Header.idUsuario()

let user = await Header.idUsuario()
Header.renderUsuarioHeader(user)

