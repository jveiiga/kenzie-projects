import { Api } from "./api.js"

export class Cadastro {
    
    static cadastroCliente() {

        const nome        = document.getElementById("clienteNome")
        const email       = document.getElementById("clienteEmail")
        const idade       = document.getElementById("clienteIdade")
        const cpf         = document.getElementById("clienteCpf")
        const sexo        = document.getElementById("clienteSexo")
        const cep         = document.getElementById("clienteCep")
        const rua         = document.getElementById("clienteRua")
        const numero      = document.getElementById("clienteNumero")
        const bairro      = document.getElementById("clienteBairro")
        const cidade      = document.getElementById("clienteCidade")
        const estado      = document.getElementById("clienteEstado")
        const btnCadastro = document.getElementById("btnCadastrar")
     
        btnCadastro.addEventListener("click", async (event) => {
            event.preventDefault()
            const data = {
                nome: nome.value,
                email: email.value,
                idade: idade.value,
                cpf: cpf.value,
                sexo: sexo.value,
                endereco : {
                    cep: cep.value,
                    rua: rua.value,
                    numero: numero.value,
                    bairro: bairro.value,
                    cidade: cidade.value,
                    estado: estado.value,
                }
            }
            Api.cadastrarCliente(data)
        })
    }   
}
Cadastro.cadastroCliente()

