import { Api } from "./api.js"

export class Deletar {

    static async deletaCliente(arrClientes) {
        
        const selecionandoCliente = document.getElementById("selecionandoCliente")

        arrClientes.forEach((cliente) => {
            
            let id = cliente.id
            let nome = cliente.nome

            const option = document.createElement("option")
            option.id = id
            option.innerText = nome

            selecionandoCliente.appendChild(option)
        })

        const btnDeletar = document.getElementById("clienteDeleteBtn")

        btnDeletar.addEventListener("click", (event) => {
            event.preventDefault()

            let i = selecionandoCliente.selectedIndex

            let children = selecionandoCliente.children[i]

            Api.deletarCliente(children.id)
        })
    }
}

const arrClientes = await Api.listarClientes()
Deletar.deletaCliente(arrClientes)

