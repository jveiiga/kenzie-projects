function listarProdutos(produtos) {

    listaProdutos.innerHTML = ""

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        criarCard(produto)  
    }
    renderizandoSoma(produtos)
}
listarProdutos(produtos)

function busca(valorPesquisa) {

    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i]

        if (valorPesquisa.toUpperCase() === produto.nome.toUpperCase()) {

            listaProdutos.innerHTML = ""

            criarCard(produto)      
        }  
    }
}

function renderizandoSoma(arrayProduto) {
    
    let valorTotal = document.querySelector(".valor-total")

    let soma = 0
    
    for (let i = 0; i < arrayProduto.length; i++) {
    
        let valor = arrayProduto[i].preco
    
        soma += valor
    }     
    valorTotal.innerText = `R$ ${soma}`
}