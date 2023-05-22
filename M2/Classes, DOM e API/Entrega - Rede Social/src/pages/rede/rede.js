import { Api } from "../../js/models/api.js"
import { Modal } from "../../js/modal.js"
import { PostsDaRede } from "../../js/postsRede.js"
import { Sair } from "../../js/sair.js"
import { SugestaoUsuario } from "../../js/sugestaoUsuario.js"


const posts = await Api.postsDaRede()
PostsDaRede.cardPosts(posts)

Sair.renderSair()

const usuarios = await Api.usuariosDaRede()
SugestaoUsuario.cardUsuarios(usuarios)


PostsDaRede.criandoPost()

const postsCard = PostsDaRede.cardPosts()
Modal.renderPostModal(postsCard)

const usuarioId = await PaginaRedeSocial.idUsuarioLogado()



