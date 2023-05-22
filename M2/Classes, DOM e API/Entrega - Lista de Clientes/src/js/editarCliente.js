import { Api } from "./api.js"

export class Editar {
    
    static async pesquisaCliente(arrClientes) {
   
        const selecionandoCliente = document.getElementById("selecionandoCliente")

        arrClientes.forEach((cliente) => {
        
            let id = cliente.id
            let nome = cliente.nome

            const option = document.createElement("option")
            option.value = id
            option.innerText = nome

            selecionandoCliente.appendChild(option)
        })
        
        const selecionandoOption = document.getElementById('buscarClienteBtn')

        selecionandoOption.addEventListener("click", async (event) => {
            event.preventDefault()

            const id = selecionandoCliente.value
          
            const obj = await Api.pesquisarCliente(id)
        
            const nome         = document.getElementById("clienteEditNome")
            const email        = document.getElementById("clienteEditEmail")
            const idade        = document.getElementById("clienteEditIdade")
            const cpf          = document.getElementById("clienteEditCpf")
            const sexo         = document.getElementById("clienteEditSexo")
            const cep          = document.getElementById("clienteEditCep")
            const rua          = document.getElementById("clienteEditRua")
            const numero       = document.getElementById("clienteEditNumero")
            const bairro       = document.getElementById("clienteEditBairro")
            const cidade       = document.getElementById("clienteEditCidade")
            const estado       = document.getElementById("clienteEditEstado")

            nome.value   = obj.nome
            email.value  = obj.email
            idade.value  = obj.idade
            cpf.value    = obj.cpf
            sexo.value   = obj.sexo
            cep.value    = obj.endereco.cep
            rua.value    = obj.endereco.rua
            numero.value = obj.endereco.numero
            bairro.value = obj.endereco.bairro
            cidade.value = obj.endereco.cidade
            estado.value = obj.endereco.estado
        })
    } 

    static async editaCliente() {
   
            const nome         = document.getElementById("clienteEditNome")
            const email        = document.getElementById("clienteEditEmail")
            const idade        = document.getElementById("clienteEditIdade")
            const cpf          = document.getElementById("clienteEditCpf")
            const sexo         = document.getElementById("clienteEditSexo")
            const cep          = document.getElementById("clienteEditCep")
            const rua          = document.getElementById("clienteEditRua")
            const numero       = document.getElementById("clienteEditNumero")
            const bairro       = document.getElementById("clienteEditBairro")
            const cidade       = document.getElementById("clienteEditCidade")
            const estado       = document.getElementById("clienteEditEstado")
            const btnAtualizar = document.getElementById("clienteEditBtn")
        
        btnAtualizar.addEventListener("click", (event) => {
            
            event.preventDefault()

            const selecionandoCliente = document.getElementById("selecionandoCliente")
            const id = selecionandoCliente.value

            const data = {
                nome: nome.value,
                email: email.value,
                idade: idade.value,
                cpf: cpf.value,
                sexo: sexo.value,
                endereco: {
                    cep: cep.value,
                    rua: rua.value,
                    numero: numero.value,
                    bairro: bairro.value,
                    cidade: cidade.value,
                    estado: estado.value,
                }
            }
            console.log(data)
            Api.editarCliente(id, data)
        })
     }
}

const arrClientes = await Api.listarClientes()
Editar.pesquisaCliente(arrClientes)

Editar.editaCliente()

  