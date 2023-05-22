import { Api } from "./models/Api.js"
class Departamento {

    static renderDepartamento(departamentos) {
        
        const containerDepartamentos = document.querySelector(".section__todos__departamentos")

        departamentos.forEach((departamento) => {

            const ramoAtividade          = departamento.name
            const horarioFuncionamento   = departamento.companies.opening_hours
            
            const cardDepartamento     = document.createElement("li")
            const nomeDepartamento     = document.createElement("h2")
            const horarioDepartamento  = document.createElement("h3")

            cardDepartamento.classList.add("card__departamento")

            nomeDepartamento.innerText    = ramoAtividade
            horarioDepartamento.innerText = horarioFuncionamento

            containerDepartamentos.appendChild(cardDepartamento)
            cardDepartamento.append(nomeDepartamento, horarioDepartamento)
        })
    }

    static renderSelectDepartamentoContratar(departamentos) {
       
        const containerSelectDepartamento = document.querySelector(".select__empresa")

        departamentos.forEach((departamento) => {
    
            const id = departamento.uuid
            const nomeDepartamento = departamento.name

            const nomeOption = document.createElement("option")

            nomeOption.value = id
            nomeOption.innerText = nomeDepartamento

            containerSelectDepartamento.appendChild(nomeOption)
        })
    }
}

const departamentos = await Api.listaDepartamentos()
Departamento.renderDepartamento(departamentos)
Departamento.renderSelectDepartamentoContratar(departamentos)