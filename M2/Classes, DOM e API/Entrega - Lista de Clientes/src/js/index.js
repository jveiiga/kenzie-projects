import { Api } from "./api.js"

export class Clientes {
    static renderClientes(arrClientes) {
   
        const container = document.querySelector(".container") 

        arrClientes.forEach((cliente) => {
            const card = Clientes.cardClient(cliente)
            container.appendChild(card)
        })
        Api.listarClientes()
    }

    static cardClient(cliente) {

        let nome     = cliente.nome
        let idade    = cliente.idade
		let cpf      = cliente.cpf
		let sexo     = cliente.sexo
		let email    = cliente.email
		let endereco = cliente.endereco
	    let cep      = cliente.endereco.cep
	    let rua      = cliente.endereco.rua
	    let numero   = cliente.endereco.numero
	    let bairro   = cliente.endereco.bairro
	    let cidade   = cliente.endereco.cidade
		let estado   = cliente.endereco.estado

        const li               = document.createElement("li")
        const h2               = document.createElement("h2")
        const divDadosPessoais = document.createElement("div")
        const h3DadosPessoais  = document.createElement("h3")
        const emailCliente     = document.createElement("p")
        const idadeCliente     = document.createElement("p")
        const cpfCliente       = document.createElement("p")
        const sexoCliente      = document.createElement("p")
        const divEndereco      = document.createElement("div")
        const h3Endereco       = document.createElement("h3")
        const cepCliente       = document.createElement("p")
        const estadoCliente    = document.createElement("p")
        const cidadeCliente    = document.createElement("p")
        const bairroCliente    = document.createElement("p")
        const ruaCliente       = document.createElement("p")
        const numeroCliente    = document.createElement("p")

        li.key = cliente.id
        li.id = cliente.id

        li.classList.add("card")

        h2.innerText              = nome
        h3DadosPessoais.innerText = "Dados Pessoais"
        emailCliente.innerText    = `Email: ${email}`
        idadeCliente.innerText    = `Idade: ${idade}`
        cpfCliente.innerText      = `Cpf: ${cpf}`
        sexoCliente.innerText     = `Sexo: ${sexo}`
        h3Endereco.innerText      = "Endereço"
        cepCliente.innerText      = `Cep: ${cep}`
        estadoCliente.innerText   = `Estado: ${estado}`
        cidadeCliente.innerText   = `Cidade: ${cidade}`
        bairroCliente.innerText   = `Bairro: ${bairro}`
        ruaCliente.innerText      = `Rua: ${rua}`
        numeroCliente.innerText   = `Numero: ${numero}`

        li.append(h2, divDadosPessoais, divEndereco)
        divDadosPessoais.append(h3DadosPessoais, emailCliente, idadeCliente, cpfCliente, sexoCliente)
        divEndereco.append(h3Endereco, cepCliente, estadoCliente, cidadeCliente, bairroCliente, ruaCliente, numeroCliente)

        return li
    }
}
const arrClientes = await Api.listarClientes()
Clientes.renderClientes(arrClientes)

