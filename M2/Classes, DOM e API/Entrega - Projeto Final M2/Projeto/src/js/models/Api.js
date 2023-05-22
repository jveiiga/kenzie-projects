export class Api {

    static baseUrl = "http://localhost:6278"

    static token = localStorage.getItem("@kenzieEmpresas:token") || ""

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async loginUsuarios(body){
        const usuario = await fetch(`${this.baseUrl}/auth/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieEmpresas:token", res.token)
            localStorage.setItem("@kenzieEmpresas:user_id", res.uuid)

            if(res.token && res.uuid != undefined && res.is_admin === true){
                window.location.replace("../../../src/pages/dashboard-admin.html")
            }
            if(res.token && res.uuid != undefined && res.is_admin != true) {
                window.location.replace("../../../src/pages/dashboard-user.html")
            }
            if(res.token && res.uuid === undefined){
                window.location.replace("../../../index.html")
            }
        })
        .catch(err => console.error(err))   
        
        return usuario
    } 

    static async cadastroUsuarios(body) {
        const usuario = await fetch(`${this.baseUrl}/auth/register/user`, {
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

        return usuario
    }

    static async listEmployeeLoggedIn() {
        const employee = await fetch(`${this.baseUrl}/users/profile`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return employee
    }

    static async listDepartmentsEmployeeLoggedIn() {
        const employee = await fetch(`${this.baseUrl}/users/departments`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return employee
    }

    static async listaFuncionariosSemTrabalho() {
        const funcionarios = await fetch(`${this.baseUrl}/admin/out_of_work`, {
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return funcionarios
    }

    static async listaTodosFuncionarios() {
        const funcionários = await fetch(`${this.baseUrl}/users`, {
            method: "GET", 
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return funcionários
    }

    static async listaDepartamentos() {
        const departamentos = await fetch(`${this.baseUrl}/departments`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return departamentos
    }
    
    static async listaTodasEmpresas() {
        const empresas = await fetch(`${this.baseUrl}/companies`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return empresas
    } 

    static async contratarFuncionario(body) {
        const funcionario = await fetch(`${this.baseUrl}/departments/hire/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return funcionario
    }

    static async editarFuncionario(id, body) {
        const funcionario = await fetch(`${this.baseUrl}/admin/update_user/${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return funcionario
    }

    static async demitirFuncionario(id) {
        const funcionario = await fetch(`${this.baseUrl}/departments/dismiss/${id}`, {
            method: "PATCH", 
            headers: this.headers,
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return funcionario
    }

    static async deletarFuncionario(id) {
        const funcionario = await fetch(`${this.baseUrl}/admin/delete_user/${id}`, {
            method: "DELETE"
        })
        .catch(err => console.error(err))
        return funcionario
    }

    static async listaTodosSetores() {
        const setorEmpresa = await fetch(`${this.baseUrl}/sectors`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return setorEmpresa
    }

    static async cadastrarEmpresa(body) {
        const empresas = await fetch(`${this.baseUrl}/companies`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .catch(err => console.error(err))

        return empresas
    }
}
