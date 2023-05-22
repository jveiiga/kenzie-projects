import { Api } from "./script.js"

class Blog {
    
   

    static buscandoPost() {

    }

    static editandoPost() {
        let btnEditar = document.querySelector(".container__img--edit")



        let buttonInput = document.querySelector(".modal__btn")

        buttonInput.addEventListener("click", (event) => {
            event.preventDefault()

            const data = {
                    "content": modalInput.value,
            }
            Api.editarPost(data)
        })  
    }

 
}
























