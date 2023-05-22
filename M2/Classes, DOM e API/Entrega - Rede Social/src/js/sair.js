export class Sair {

    static renderSair() {

        const sair = document.getElementById("sair")

        sair.addEventListener("click", (event) => {
            event.preventDefault()

            localStorage.removeItem("@kenzieRede:token")
            localStorage.removeItem("@kenzieRede:User_id")

            window.location.replace("../../../index.html")
        })
    }
}

