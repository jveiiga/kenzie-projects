import { Api } from "./models/Api.js"

class Admin {

    static renderFuncionarioSemTrabalho(funcionarios) {
    
        const containerFuncionariosNãoContratados = document.querySelector(".section__funcionarios__naoContratados")
    
        funcionarios.forEach((funcionario) => {
    
            if(funcionario.department_uuid == null) {

                const nomeFuncionario = funcionario.username
                const nivelProfissao  = funcionario.professional_level
                const tipoTrabalho    = funcionario.kind_of_work
    
                const cardFuncionario = document.createElement("li")
                const nome            = document.createElement("h3")
                const profissao       = document.createElement("p")
                const trabalho        = document.createElement("p")
    
                cardFuncionario.classList.add("section__card__funcionarioSemTrabalho")
    
                nome.innerText      = nomeFuncionario
                profissao.innerText = nivelProfissao
                trabalho.innerText  = tipoTrabalho
    
                containerFuncionariosNãoContratados.appendChild(cardFuncionario)
                cardFuncionario.append(nome, profissao, trabalho)
    
                return cardFuncionario
            }   
        })
    }

    static async renderTodosFuncionarios(funcionarios) {
        
        const containerCards = document.querySelector(".section__todos__funcionários")

        funcionarios.forEach((funcionario) => {

            const nomeFuncionario = funcionario.username
            const nivelProfissao  = funcionario.professional_level
            const tipoTrabalho    = funcionario.kind_of_work

            const cardFuncionario = document.createElement("li")
            const nome            = document.createElement("h3")
            const profissao       = document.createElement("p")
            const trabalho        = document.createElement("p")

            cardFuncionario.classList.add("section__card__funcionario")

            nome.innerText      = nomeFuncionario
            profissao.innerText = nivelProfissao
            trabalho.innerText  = tipoTrabalho

            containerCards.appendChild(cardFuncionario)
            cardFuncionario.append(nome, profissao, trabalho)

        })
    }

    static renderSelectNovoFuncionario(funcionarios) {
      
        const containerSelect = document.querySelector(".select__novo__funcionario")
  
        funcionarios.forEach((funcionario) => {
         
            if(funcionario.department_uuid === null) {

                const id              = funcionario.uuid
                const nomeFuncionario = funcionario.username 

                const funcionarioOption = document.createElement("option")

                funcionarioOption.value     = id
                funcionarioOption.innerText = nomeFuncionario

                containerSelect.appendChild(funcionarioOption)
            }
        })
    }

    static renderSelectEditar(funcionarios) {
      
        const containerSelectEditar = document.querySelector(".select__novo__funcionario__editar")

        funcionarios.forEach((funcionario) => {
         
          
            if(funcionario.department_uuid != null) {

                const id              = funcionario.uuid
                const nomeFuncionario = funcionario.username 

                const funcionarioOption = document.createElement("option")

                funcionarioOption.value     = id
                funcionarioOption.innerText = nomeFuncionario

                containerSelectEditar.appendChild(funcionarioOption)
            }
        })
    }

    static renderSelectFuncionarioDemitido(funcionarios) {

        const containerSelectEditar = document.querySelector(".select__funcionario__demitir")
        
        funcionarios.forEach((funcionario) => {
                   
            if(funcionario.department_uuid != null) {

                const id              = funcionario.uuid
                const nomeFuncionario = funcionario.username 

                const funcionarioOption = document.createElement("option")

                funcionarioOption.value     = id
                funcionarioOption.innerText = nomeFuncionario

                containerSelectEditar.appendChild(funcionarioOption)
            }
        })
    }   

    static renderSelectFuncionarioDeletar(funcionarios) {

        const containerSelectDeletar = document.querySelector(".select__funcionario__deletado")

        funcionarios.forEach((funcionario) => {
            const id              = funcionario.uuid
            const nomeFuncionario = funcionario.username 

            const funcionarioOption = document.createElement("option")

            funcionarioOption.value     = id
            funcionarioOption.innerText = nomeFuncionario

            containerSelectDeletar.appendChild(funcionarioOption)
        })
    }

    static renderSelectSetores(setores) {

        const selectSetor = document.querySelector(".section__setor")

        setores.forEach((setor) => {
            
            const id         = setor.uuid
            const nomeSetor = setor.description

            const nome = document.createElement("option")

            nome.value     = id
            nome.innerText = nomeSetor

            selectSetor.appendChild(nome)

        })
    }
}

const funcionarios = await Api.listaTodosFuncionarios()
Admin.renderTodosFuncionarios(funcionarios)

const funcionarioSemTrabalho = await Api.listaFuncionariosSemTrabalho()
Admin.renderFuncionarioSemTrabalho(funcionarioSemTrabalho)

const funcionariosContratados = await Api.listaTodosFuncionarios()
Admin.renderSelectNovoFuncionario(funcionariosContratados)
Admin.renderSelectEditar(funcionariosContratados)
Admin.renderSelectFuncionarioDemitido(funcionariosContratados)
Admin.renderSelectFuncionarioDeletar(funcionariosContratados)

const setores = await Api.listaTodosSetores()
Admin.renderSelectSetores(setores)

