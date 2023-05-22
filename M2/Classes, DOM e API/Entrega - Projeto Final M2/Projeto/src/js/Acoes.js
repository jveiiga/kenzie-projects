import { Api } from "./models/Api.js"


export class FuncionarioAcoes {

    static contratarFuncionario() {
        const btnContratar = document.querySelector(".btnContratar")
        
        btnContratar.addEventListener("click",  async () => {

            const uuidFuncionario = document.querySelector(".select__novo__funcionario").value
            const uuidEmpresa     = document.querySelector(".select__empresa").value
            
            const data = {
                "user_uuid": uuidFuncionario,
                "department_uuid": uuidEmpresa
              }		

              Api.contratarFuncionario(data)
        })
    }

    static editarFuncionario() {

        const btnEditar = document.querySelector(".btnEditar")

        btnEditar.addEventListener("click", async () => {

           const id             = document.querySelector(".select__novo__funcionario__editar").value
           const tipoTrabalho   = document.querySelector(".select__tipo__trabalho").value
           const nivelProfissao = document.querySelector(".select__nivel__profissao").value
         
            const data = {
                "kind_of_work": tipoTrabalho,
                "professional_level": nivelProfissao
              }
              Api.editarFuncionario(id, data)
        })
    }

    static demitirFuncionario() {

        const btnDemitir = document.querySelector(".btnDemitir")

        btnDemitir.addEventListener("click",  async () => {

            const id = document.querySelector(".select__funcionario__demitir").value

            Api.demitirFuncionario(id)
        })
    }

    static deletarFuncionario() {

        const btnDeletar = document.querySelector(".btnDeletar")
        
        btnDeletar.addEventListener("click",  async () => {

            const id = document.querySelector(".select__funcionario__deletado").value
            
            Api.deletarFuncionario(id) 
        })
    }

    static async 

    static cadastrarEmpresa() {

        const btnCadastrar = document.querySelector(".btnCadastrar")

        btnCadastrar.addEventListener("click",  async () => {

            const uuid           = document.querySelector(".section__setor").value
            const inputNome      = document.querySelector(".section__nome").value
            const inputHora      = document.querySelector(".section__hora").value
            const inputDescricao = document.querySelector(".section__descricao").value

            const data = {
                "name": inputNome,
                "opening_hours": inputHora,
                "description": inputDescricao,
                "sector_uuid": uuid
              }
              Api.cadastrarEmpresa(data)
        })
    }
}
FuncionarioAcoes.contratarFuncionario()
FuncionarioAcoes.editarFuncionario()
FuncionarioAcoes.demitirFuncionario()
FuncionarioAcoes.deletarFuncionario()
FuncionarioAcoes.cadastrarEmpresa()