import { Api } from "./src/js/models/Api.js"

class Start {

    static menuResponsive() {

        const menu          = document.querySelector(".menu")
        const btnHamburguer = document.querySelector(".hamburguer")
        const closeIcon     = document.querySelector(".closeIcon")
        const menuIcon      = document.querySelector(".menuIcon")

        btnHamburguer.addEventListener("click", () => {
    
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu")
                closeIcon.style.display = "none"
                menuIcon.style.display  = "block"
            }else {
                menu.classList.add("showMenu")
                closeIcon.style.display = "block"
                menuIcon.style.display  = "none"
            }
        })
    }  

    static loginCadastro() {

        const token = localStorage.getItem("@kenzieEmpresas:token")

        // if(token) {
        //     window.location.replace("./src/pages/dashboard-user.html")
        // }

        const btnToggleModal = document.querySelectorAll("[data-control-modal]")
        
            btnToggleModal.forEach((btn) => {
    
                btn.addEventListener("click", () => {

                    const controlModal = btn.getAttribute("data-control-modal")
                    const modalId      = document.getElementById(controlModal)
                    modalId.classList.toggle("showModal") 
                })
            })

        const inputEmail = document.getElementById("emailLogin")
        const inputSenha = document.getElementById("senhaLogin")
        const btnLogin   = document.querySelector(".btnLogin")

        btnLogin.addEventListener("click", (event) => {
            event.preventDefault()
            const data = {
                "email": inputEmail.value,
                "password": inputSenha.value
            }
            Api.loginUsuarios(data)
        })

        const inputSenhaCadastro = document.getElementById("senha")
        const inputEmailCadastro = document.getElementById("email")
        const inputProfissao     = document.getElementById("profissao")
        const inputUsuario       = document.getElementById("usuario")
        const btnCadastro        = document.querySelector(".btnCadastro")

        btnCadastro.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                "password": inputSenhaCadastro.value,
                "email": inputEmailCadastro.value,
                "professional_level": inputProfissao.value,
                "username": inputUsuario.value
            }
            Api.cadastroUsuarios(data)
        })
    }

    static renderingCompanies(companies) {

        const listCompanies = document.querySelector(".main__carrosel__companies")

        companies.forEach((companie) => {
            console.log(companie.sectors.description)
            const nameCompanies  = companie.name
            const setorCompanies = companie.sectors.description
            const hoursCompanies = companie.opening_hours
            
            const list      = document.createElement("li")
            const container = document.createElement("div")
            const name      = document.createElement("h2")
            const setor     = document.createElement("p")
            const hour      = document.createElement("p")
            const icon      = document.createElement("img")

            list.classList.add("li__carrosel__companies")
            container.classList.add("li__container")
            icon.classList.add("img__icon")
            
            setor.innerText = `- ${setorCompanies}`
            name.innerText  = nameCompanies
            hour.innerText  =  `- Abre às ${hoursCompanies}`

            if (companie.sectors.description === "Alimenticio") {
                icon.src = `./src/assets/alimenticio.png`
            }else if (companie.sectors.description === "Varejo") {
                icon.src = `./src/assets/varejo.png`
            }else if (companie.sectors.description === "Textil") {
                icon.src = `./src/assets/textil.png`
            }else if(companie.sectors.description === "Manufatura") {
                icon.src = `./src/assets/manufatura.png`
            }else if (companie.sectors.description === "Aeroespacial") {
                icon.src = `./src/assets/aeroespacial.png`
            }else if (companie.sectors.description === "Automotiva") {
                icon.src = `./src/assets/automotiva.png`
            }else if (companie.sectors.description === "TI") {
                icon.src = `./src/assets/ti.png`
            }else {
                icon.src = `./src/assets/atacado.png`
            }

            listCompanies.appendChild(list)
            container.append(icon, name)
            list.append(container, setor, hour)
        })
    }
}
const companies = await Api.listaTodasEmpresas()
Start.renderingCompanies(companies)

Start.loginCadastro()

Start.menuResponsive()