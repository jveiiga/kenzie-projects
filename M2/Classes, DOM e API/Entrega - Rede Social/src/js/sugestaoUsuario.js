export class SugestaoUsuario {
    
    static async cardUsuarios(usuarios) {

        const ul = document.querySelector(".main__carrossel")

        usuarios.results.forEach((usuario) => {
 
            usuario.following.forEach((seguindo) => {
                
                const imagemUsuario    = usuario.image
                const usuarioNome      = usuario.username
                const profissao        = usuario.work_at
                const seguindoUsuario  = seguindo.following_users_id.uuid

                const li           = document.createElement("li")
                const spanSugestao = document.createElement("span")
                const img          = document.createElement("img")
                const spanConteudo = document.createElement("span")
                const h3           = document.createElement("h3")
                const p            = document.createElement("p")
                const button       = document.createElement("button")

                li.classList.add("main__conteudo")
                spanSugestao.classList.add("main__conteudoSugestao")
                img.classList.add("main__usuarioImg")
                spanConteudo.classList.add("main__conteudo--NomeProfissao")
                h3.classList.add("main__nomeUsuario--sugestao")
                p.classList.add("main__profissaoUsuario--sugestao")

                if(seguindoUsuario) {
                    button.classList.add("button-mediun")
                }else{
                    button.classList.add(".button-black-litle")
                }

                img.src      = imagemUsuario
                h3.innerText = usuarioNome
                p.innerText  = profissao
                button.innerText = "seguindo"

                ul.appendChild(li)
                li.append(spanSugestao, button)
                spanSugestao.append(img, spanConteudo)
                spanConteudo.append(h3, p)

                return li
            })
        })
    }
}

