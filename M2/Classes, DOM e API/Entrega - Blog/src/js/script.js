export class Api {

    static baseUrl = "https://blog-m2.herokuapp.com"

    static token = localStorage.getItem("@kenzieBlog:token") || ""

    static headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${this.token}`
    }

    static async login(body) {
        const usuarioLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieBlog:token", res.token)
            localStorage.setItem("@kenzieBlog:User_id", res.userId)
            
            window.location.assign("../../src/pages/blog.html")
        })
        .catch(err => console.err(err))

        return usuarioLogin
    }

    static async cadastro(body) {
        const usuarioCadastro = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)  
        })
        .then(res => res.json())
        .then(res => {
            window.location.assign("../../src/pages/blog.html")

            return res
        })
        .catch(err => console.err(err))

        return usuarioCadastro
    }

    static async listaUsuario(id) {

        const listaUsuario = await fetch(`${this.baseUrl}/users/${id}`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return listaUsuario
    }

    static async buscaId(id) {
        const buscaPeloId = await fetch(`${this.baseUrl}/users/${id}`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return buscaPeloId
    }

    static async buscaPosts() {
        const buscaPost = await fetch(`${this.baseUrl}/posts`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .catch(err => console.error(err))
     
        return buscaPost
    }

    // static async buscaPostEspecifico() {
    //     const posts = await fetch(`${this.baseUrl}/posts/${id}`, {
    //         method: "GET",
    //         headers: this.headers,
    //         body: JSON.stringify(body)
    //     })
    //     .then(res => res.json())
    //     .catch(err => console.error(err))

    //     return posts
    // }

    static async novoPost(body) {
        const post = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return post
    }

    static async editarPost(body) {
        const editar = await fetch(`${this.baseUrl}/posts/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return editar
    }


}
