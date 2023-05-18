let produtos = [
    {
        nome: "Uva Crimson",
        preco: 44.99
    },
    {
        nome: "Vinho Canção",
        preco: 17.98
    },
    {
        nome: "Água de coco",
        preco: 8.99
    },
    {
        nome: "Mamão",
        preco: 9.98
    },
    {
        nome: "Água tônica",
        preco: 17.98
    },
]

const body = document.querySelector("body")

const main = document.createElement("main")
main.classList.add("container_main")
body.appendChild(main)

const header = document.createElement("div")
main.appendChild(header)
header.classList.add("container_header")

const itemTexto = document.createElement("p")
header.appendChild(itemTexto)
itemTexto.innerText = "Item"

const valorTexto = document.createElement("p")
header.appendChild(valorTexto)
valorTexto.innerText = "Valor"

const lista = document.createElement("ul")
lista.className = "lista"
main.appendChild(lista)

const section = document.createElement("section")
main.appendChild(section)

function listarProdutos(produto) {

    const li = document.createElement("li")
    li.classList.add("container_li")

    li.innerHTML = `
    <p>${produto.nome}</p> 
    <p>R$ ${produto.preco}</p>    
    `

    lista.appendChild(li)
}
produtos.forEach(listarProdutos)

function somarProdutos(listarProdutos) {
    let result = 0
   
    for( let i = 0; i < produtos.length; i++ ) {

        result += produtos[i].preco

    }
    
    const div = document.createElement("div")
    div.innerHTML = `
    <p> R$ ${result}</p>    
    `
    const p = document.createElement("p")
    div.appendChild(p)
    div.classList.add("container_div")
    p.innerText = "Total"

    section.appendChild(div)
}
somarProdutos(listarProdutos)

const button = document.createElement("button")
button.appendChild(document.createTextNode("Finalizar compra"));
section.appendChild(button)




