export class Navegacao {

    static sair() {

        const btnSair = document.getElementById("btnSair")

        btnSair.addEventListener("click", (event) => {
            console.log(btnSair)
            event.preventDefault()

            localStorage.removeItem("@kenzieEmpresas:token")
            localStorage.removeItem("@kenzieEmpresas:user_id")

            window.location.replace("../../src/../index.html")
        })
    }
}
Navegacao.sair()


