import { Api } from "./models/Api.js"

    class Empresas {

        static renderTodasEmpesas(empresas) {
            console.log(empresas)
            const containerTodasEmpresas = document.querySelector(".section__todas__empresas")

            empresas.forEach((empresa) => {

                const nomeEmpresa          = empresa.name
                const descricaoEmpresa     = empresa.description
                const funcionamentoEmpresa = empresa.opening_hours
                const setorEmpresa         = empresa.sectors.description

                const cardEmpresa   = document.createElement("li")
                const nome          = document.createElement("h2")
                const descricao     = document.createElement("p")
                const funcionamento = document.createElement("p")
                const setor         = document.createElement("h3")

                nome.innerText          = nomeEmpresa
                descricao.innerText     = descricaoEmpresa
                funcionamento.innerText = funcionamentoEmpresa
                setor.innerText         = setorEmpresa

                containerTodasEmpresas.appendChild(cardEmpresa)
                cardEmpresa.append(nome, descricao, funcionamento, setor)
            })
        }
}
const empresas = await Api.listaTodasEmpresas()
Empresas.renderTodasEmpesas(empresas)