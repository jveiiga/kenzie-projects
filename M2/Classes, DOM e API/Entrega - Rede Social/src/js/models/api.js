import { Modal } from "../modal.js"

export class Api {

    static baseUrl = "http://m2-rede-social.herokuapp.com/api/"

    static token = localStorage.getItem("@kenzieRede:token") || ""

    static headers = {
        "Content-Type": "application/json",    
    }

    static async loginUsuario(body) {
        const login = await fetch(`${this.baseUrl}users/login/`, {
            method: "POST",
            headers: this.headers, 
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieRede:token", res.token)
            localStorage.setItem("@kenzieRede:User_id", res.user_uuid)
            
            if(res.token && res.user_uuid != undefined) {
                window.location.replace("../../../src/pages/rede/rede.html")
            } else {
                Modal.mostraModal()
                Modal.fechaModal()
            }         
        })
        .catch(err => console.error(err))

        return login
    }

    static async cadastroUsuario(body) {
        const cadastro = await fetch(`${this.baseUrl}users/`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            window.location.replace("../../../index.html")

            return res
        })
        .catch(err => console.error(err))

        return cadastro
    }

    static async listaUsuario(id) {
        const usuario = await fetch(`${this.baseUrl}users/${id}/`, {
            method: "GET",
            headers: {
                ...this.headers, 
                Authorization:`Token ${this.token}`
            }
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return usuario
    }
    static async usuariosDaRede() {
        const usuarios = await fetch(`${this.baseUrl}users/`, {
            method: "GET",
            headers: {
                ...this.headers, 
                Authorization:`Token ${this.token}`
            }
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return usuarios
    }


    static async postsDaRede() {
        const posts = await fetch(`${this.baseUrl}posts/`, {
            method: "GET",
            headers: {
                ...this.headers, 
                Authorization:`Token ${this.token}`
            }

        })
        .then(res => res.json())
        .catch(err => console.error(err))  

        return posts
    }

    static async novoPost(body) {
        const post = await fetch(`${this.baseUrl}posts/`, {
            method: "POST",
            headers: {
                ...this.headers, 
                Authorization:`Token ${this.token}`
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return post
    }
}