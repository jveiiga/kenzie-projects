let listaProdutos = document.querySelector(".container-loja")
let listarCarrinho = document.querySelector(".container-carrinho ul")
let valores = document.querySelector(".container-footer-carrinho")

function listarProdutos(produtos) {
    
    listaProdutos.innerHTML = ""

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        let card = criarCard(produto)
        listaProdutos.appendChild(card)
    }
}
listarProdutos(dados)

function criarCard(produto) {
    let imagem = produto.img
    let nome = produto.nameItem
    let descricao = produto.description
    let valor = produto.value
    let addCarrinho = produto.addCart
    let tag = produto.tag
    let id = produto.id

    let li = document.createElement("li")
    let img = document.createElement("img")
    let h2 = document.createElement("h2")
    let h1 = document.createElement("h1")
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")
    let p = document.createElement("p")

    p.setAttribute("id", id)

    li.classList.add("container-card-loja")
    img.classList.add("container-card-imagem")
    h2.classList.add("container-tag")
    h1.classList.add("container-nome-item")
    h3.classList.add("container-descricao")
    h4.classList.add("container-valor")
    p.classList.add("container-addCarrinho")

    img.src = imagem
    img.alt = descricao
    h2.innerText = tag
    h1.innerText = nome
    h3.innerText = descricao
    h4.innerText = valor
    p.innerText = addCarrinho

    li.appendChild(img)
    li.appendChild(h2)
    li.appendChild(h1)  
    li.appendChild(h3)
    li.appendChild(h3)
    li.appendChild(p)

    return li
}

let inputBusca = document.querySelector(".container-campo-busca input")
let btnBusca = document.querySelector(".container-campo-busca button")

btnBusca.addEventListener("click", function(){
    
    let valorBusca = inputBusca.value
    
    let buscaResultado = busca(valorBusca)
    listarProdutos(buscaResultado)
})

function busca(valorPesquisa) {
    
    let resultadoBusca = [] 
    
    for (let i = 0; i < dados.length; i++) {
    
        let produto = dados[i]
        
        if(valorPesquisa === produto.nameItem) {
    
            resultadoBusca.push(produto)
        }
    }
    return resultadoBusca
}

function listarProdutosCarrinho(carrinhoDeCompras){
    listarCarrinho.innerHTML = ""
    
    for (let i = 0; i < carrinhoDeCompras.length; i++) {
        let produtoCarrinho = carrinhoDeCompras[i]
        
        let cardCarrinho = criarCardCarrinho(produtoCarrinho)
        listarCarrinho.appendChild(cardCarrinho)        
    }
}

function criarCardCarrinho(produtoCarrinho) {    

    let imagem = produtoCarrinho.img
    let nome = produtoCarrinho.nameItem
    let valor = produtoCarrinho.value
    let id = produtoCarrinho.id
    let rmvCarrinho = "Remover Produto"

    let li = document.createElement("li")
    let divImg= document.createElement("div")
    let img = document.createElement("img")
    let divConteudo= document.createElement("div")
    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    p.setAttribute("id", id)

    li.classList.add("container-item-carrinho")
    img.classList.add("container-card-imagem-carrinho")
    h1.classList.add("container-nome-item-carriho")
    h2.classList.add("container-valor-carrinho")
    p.classList.add("container-rmvCarrinho")

    img.src = imagem
    h1.innerText = nome
    h2.innerText = `R$ ${valor}`
    p.innerText = rmvCarrinho

    li.appendChild(divImg)
    divImg.appendChild(img)
    li.appendChild(divConteudo)
    divConteudo.appendChild(h1)
    divConteudo.appendChild(h2)
    divConteudo.appendChild(p)

    return li
}

listaProdutos.addEventListener("click", interceptandoProduto)

let carrinhoDeCompras = []

function interceptandoProduto(event) {

    let btnAddCarrinho = event.target 
   
    if(btnAddCarrinho.tagName == "P") {

        let idProduto = btnAddCarrinho.id
        
        let produto = dados.find(function(produto){

            if(produto.id == idProduto) {

                return produto
            }
        })
        adicionarProdutoCarrinho(produto)
        listarProdutosCarrinho(carrinhoDeCompras)
    }
}

function adicionarProdutoCarrinho(produto) {

    carrinhoDeCompras.push(produto)
    criandoFooter(produto)
}

//REMOVENDO PRODUTO CARRINHO CARRINHO

listarCarrinho.addEventListener("click", interceptandoProdutoCarrinho)

function interceptandoProdutoCarrinho(event) {

    let btnRmvCarrinho = event.target

    if(btnRmvCarrinho.tagName == "P") {

        let idProduto = btnRmvCarrinho.id
        removendoProdutoCarrinho(idProduto)   
    }
}

function removendoProdutoCarrinho(idProduto) {

    listarCarrinho.innerHTML = ""
    
    const verificandoIndice = (obj) => idProduto == obj.id

    let indiceProduto = carrinhoDeCompras.findIndex(verificandoIndice)
    
    carrinhoDeCompras.splice(indiceProduto,1)
    
    listarProdutosCarrinho(carrinhoDeCompras)
    criandoFooter()
}

function criandoFooter() {

    valores.innerHTML = ""

    let quantidadeDeProdutos = carrinhoDeCompras.length
    
    let quantidade = "Quantidade:"
    let total = "Total"
    let valorQuantidade = quantidadeDeProdutos
    let valorTotal = 0
    
    for (let i = 0; i < carrinhoDeCompras.length; i++) {
        
        valorTotal += carrinhoDeCompras[i].value
    }

    let divTexto = document.createElement("div")
    let pTextoQuantidade = document.createElement("p")
    let pTextoValor = document.createElement("p")
    let divValor = document.createElement("div")
    let pValorQuantidade = document.createElement("p")
    let pValorTotal = document.createElement("p")

    pTextoQuantidade.classList.add("container-total-carrinho")
    pValorQuantidade.classList.add("container-total-carrinho")

    pTextoQuantidade.innerText = quantidade
    pTextoValor.innerText = total
    pValorQuantidade.innerText = valorQuantidade
    pValorTotal.innerText = valorTotal

    divTexto.appendChild(pTextoQuantidade)
    divTexto.appendChild(pTextoValor)
    divValor.appendChild(pValorQuantidade)
    divValor.appendChild(pValorTotal)
    valores.appendChild(divTexto)
    valores.appendChild(divValor)
}
criandoFooter()




