let ulFrutas = document.querySelector(".fruits")
let ulBebidas = document.querySelector(".drinks")
let ulHigiene = document.querySelector(".hygiene")

function filtrarProdutos(listaProdutos) {

    for (let i = 0; i < listaProdutos.length; i++) {

        let produto = listaProdutos[i]

        if(produto.categoria === "Frutas") {
            
            let cardFrutas = criarCardFrutas(produto)
            ulFrutas.appendChild(cardFrutas)

        }

        if(produto.categoria === "Bebidas") {
            
            let cardBebidas = criarCardDrinks(produto)
            ulBebidas.appendChild(cardBebidas)

        }

        if(produto.categoria === "Higiene") {

            let cardHigiene = criarCardHygiene(produto)
            ulHigiene.appendChild(cardHigiene)

        }      
    }
}
filtrarProdutos(produtos)

function criarCardFrutas(produtos) {

    let titulo = produtos.titulo
    let preco = produtos.preco
    let categoria = produtos.categoria
    let imagem = produtos.imagem
    let imagemDescricao = produtos.imagemDescricao

    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let strong = document.createElement("strong")
 
    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")
    
    img.src = imagem
    img.alt = imagemDescricao

    if(imagem === undefined) {
        img.src = "./img/products/no-img.svg"
    }

    h1.innerText = titulo
    h5.innerText = categoria
    strong.innerText = preco

    li.appendChild(img)
    li.appendChild(main)
    main.appendChild(h1)
    main.appendChild(h5)
    main.appendChild(strong)

    return li   
}

function criarCardDrinks(produtos) {

    let titulo = produtos.titulo
    let preco = produtos.preco
    let categoria = produtos.categoria
    let imagem = produtos.imagem
    let imagemDescricao = produtos.imagemDescricao

    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let strong = document.createElement("strong")
    
    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")
    
    img.src = imagem
    img.alt = imagemDescricao

    if(imagem === undefined) {
        img.src = "./img/products/no-img.svg"
    }

    h1.innerText = titulo
    h5.innerText = categoria
    strong.innerText = preco

    li.appendChild(img)
    li.appendChild(main)
    main.appendChild(h1)
    main.appendChild(h5)
    main.appendChild(strong)

    return li
}

function criarCardHygiene(produtos) {

    let titulo = produtos.titulo
    let preco = produtos.preco
    let categoria = produtos.categoria
    let imagem = produtos.imagem
    let imagemDescricao = produtos.imagemDescricao

    let li = document.createElement("li")
    let img = document.createElement("img")
    let main = document.createElement("main")
    let h1 = document.createElement("h1")
    let h5 = document.createElement("h5")
    let strong = document.createElement("strong")
 
    li.classList.add("product")
    img.classList.add("product-img")
    main.classList.add("product-main")
    h1.classList.add("product-title")
    h5.classList.add("product-category")
    strong.classList.add("product-price")
    
    img.src = imagem
    img.alt = imagemDescricao

    if(imagem === undefined) {
        img.src = "./img/products/no-img.svg"
    }

    h1.innerText = titulo
    h5.innerText = categoria
    strong.innerText = preco

    li.appendChild(img)
    li.appendChild(main)
    main.appendChild(h1)
    main.appendChild(h5)
    main.appendChild(strong)

    return li
}
