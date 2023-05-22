import { Api } from "./script.js"

class PostBlog {

    static novoPost() {
        let inputPost = document.getElementById("inputPost")
        let btnPostar = document.getElementById("btnPostar")
    
        btnPostar.addEventListener("click", (event) => {
            event.preventDefault()
    
            const data = {
                    "content": inputPost.value,  
            }
            Api.novoPost(data)
        })
    }
    
}

PostBlog.novoPost()