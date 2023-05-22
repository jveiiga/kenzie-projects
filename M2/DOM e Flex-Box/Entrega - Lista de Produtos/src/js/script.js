let listaProdutos = document.querySelector(".listaProdutos")
let listarCarrinho = document.querySelector(".container-carrinho ul")
let valores = document.querySelector(".container-footer-carrinho")

const renderizandoSoma = (arrayProduto) => {
    let valorTotal = document.querySelector(".valor-total")

    const resultadoReduce = arrayProduto.reduce((soma, { preco }) => {
        let totalSoma = soma + preco

        return totalSoma
    }, 0)
    valorTotal.innerText = `R$ ${resultadoReduce}`
}

const criarCard = (produto) => {

    let nome = produto.nome
    let preco = produto.preco
    let secao = produto.secao
    let imagem = produto.img
    let id = produto.id

    let li = document.createElement("li")
    let img = document.createElement("img")
    let h3 = document.createElement("h3")
    let span = document.createElement("span")
    let divPB = document.createElement("div")
    let p = document.createElement("p")
    let button = document.createElement("button")

    button.setAttribute("id", id)

    img.src = imagem
    img.alt = nome
    h3.innerText = nome
    span.innerText = secao
    p.innerText = preco
    button.innerText = "Comprar"

    li.appendChild(img)
    li.appendChild(h3)
    li.appendChild(span)
    divPB.appendChild(p)
    divPB.appendChild(button)
    li.appendChild(divPB)

    listaProdutos.appendChild(li)
}

const listarProdutos = (produtos) => {

    listaProdutos.innerHTML = ""

    produtos.forEach((produto) => {
        criarCard(produto)
    })
    renderizandoSoma(produtos)
}
listarProdutos(produtos)

const filtrandoProdutosSecao = (categoria) => {
    let produtosFiltrados = produtos.filter(produto => {

        let secao = produto.secao

        return secao === categoria

    })
    listarProdutos(produtosFiltrados)
}

let inputBusca = document.querySelector(".campoBuscaPorNome")
let btnBusca = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")

btnBusca.addEventListener("click", function () {

    let valorBusca = inputBusca.value

    busca(valorBusca)
})

const busca = (valorPesquisa) => {

    produtos.forEach((produto) => {
        if (valorPesquisa.toUpperCase() === produto.nome.toUpperCase()) {

            listaProdutos.innerHTML = ""

            criarCard(produto)
        }
    })
}

let btnFiltro = document.querySelectorAll(".estiloGeralBotoes--filter")

btnFiltro.forEach(btn => {
    btn.addEventListener("click", function (event) {

        let categoria = event.target.innerText

        if (categoria === "Todos Produtos") {

            listarProdutos(produtos)

        } else {

            filtrandoProdutosSecao(categoria)

        }
    })
});

let carrinhoDeCompras = []

const listarProdutosCarrinho = () => {
 
    listarCarrinho.innerHTML = ""

    carrinhoDeCompras.forEach((produtoCarrinho) => {

        criarCardCarrinho(produtoCarrinho)
    })
}

const criarCardCarrinho = (produtoCarrinho) => {

    let imagem = produtoCarrinho.img
    let nome = produtoCarrinho.nome
    let secao = produtoCarrinho.secao
    let preco = produtoCarrinho.preco
    let id = produtoCarrinho.id

    let li = document.createElement("li")
    let divImg = document.createElement("div")
    let img = document.createElement("img")
    let divDescricao = document.createElement("div")
    let h2Nome = document.createElement("h2")
    let p = document.createElement("p")
    let h2Preco = document.createElement("h2")
    let a = document.createElement("a")
    let imgLixeira = document.createElement("img")

    imgLixeira.setAttribute("id", id)

    img.src = imagem
    img.alt = nome
    h2Nome.innerText = nome
    p.innerText = secao
    h2Preco.innerText = `R$ ${preco}`
    imgLixeira.src = `./src/img/lixeira.png`

    li.classList.add("container-item-carrinho")
    img.classList.add("container-card-imagem-carrinho")
    divDescricao.classList.add("container-descricao-produto-carrinho")
    h2Nome.classList.add("container-nome-item-carriho")
    p.classList.add("container-secao-carrinho")
    h2Preco.classList.add("container-valor-carrinho")
    a.classList.add("container-rmvCarrinho")

    li.appendChild(divImg)
    divImg.appendChild(img)
    li.appendChild(divDescricao)
    divDescricao.appendChild(h2Nome)
    divDescricao.appendChild(p)
    divDescricao.appendChild(h2Preco)
    li.appendChild(a)
    a.appendChild(imgLixeira)

    listarCarrinho.appendChild(li)
}

const interceptandoProduto = (event) => {
    
    let btnComprar = event.target 
    
    if (btnComprar.tagName == "BUTTON") {
        
        let idProduto = btnComprar.id
        
        let produto = produtos.find((produto) => {
            
            let produtoId = produto.id
            
            if(produtoId == idProduto) {
                
                return produto
            }
        })

        adicionarProdutoCarrinho(produto)
    }
}
listaProdutos.addEventListener("click", interceptandoProduto)

const adicionarProdutoCarrinho = (produto) => {

    carrinhoDeCompras.push(produto)

    criandoFooterCarrinho(produto)
    listarProdutosCarrinho()    
}

//REMOVENDO PRODUTO CARRINHO CARRINHO

const interceptandoProdutoCarrinho = (event) => {

    let imgRmvCarrinho = event.target

    if (imgRmvCarrinho.tagName == "IMG") {
        
        let idProduto = imgRmvCarrinho.id
        removendoProdutoCarrinho(idProduto)
    }
}
listarCarrinho.addEventListener("click", interceptandoProdutoCarrinho)

const removendoProdutoCarrinho = (idProduto) => {
    
    const verificandoIndice = (obj) => idProduto == obj.id

    let indiceProduto = carrinhoDeCompras.findIndex(verificandoIndice)

    carrinhoDeCompras.splice(indiceProduto,1)

    listarProdutosCarrinho()
    criandoFooterCarrinho()
}

const criandoFooterCarrinho = () => {

    valores.innerHTML = ""

    let quantidadeDeProdutos = carrinhoDeCompras.length

    let quantidade = "Quantidade:"
    let total = "Total"
    let valorQuantidade = quantidadeDeProdutos
    let valorTotal = 0

    for (let i = 0; i < carrinhoDeCompras.length; i++) {

        let valorCarrinho = carrinhoDeCompras[i].preco
        
        valorTotal += valorCarrinho
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
criandoFooterCarrinho()




































