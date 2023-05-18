let itemFigure = [
    {
        imagem: "assets/img/actions/animewoman.jpg",
        nome: "Asuka Langley Soryuu",
        valor: "120.00"
    },
    {
        imagem: "assets/img/actions/dragonballpersonagem.jpg",
        nome: "Dragonball Goku",
        valor: "130.00"
    },
    {
        imagem: "assets/img/actions/starwarspersonagem.jpg",
        nome: "Starwars Mini Yoda",
        valor: "140.00"
    }
]

let itemPainting = [
    {
        imagem: "assets/img/painting/clock.jpg",
        nome: "Watch",
        valor: "120.00"
    },
    {
        imagem: "assets/img/painting/gamepad.jpg",
        nome: "Control",
        valor: "130.00"
    },
    {
        imagem: "assets/img/painting/personagem.jpg",
        nome: "C-3PO",
        valor: "140.00"
    }
]

let produtosPaintings = document.querySelector(".produtos-painting")

function listarProdutosPaintings(listaPaintings) {

    for (let i = 0; i < listaPaintings.length; i++) {

        let itemPainting = listaPaintings[i]

        let cardPaintings = criarCardProdutosPaintings(itemPainting)

        produtosPaintings.appendChild(cardPaintings)
    }
}
listarProdutosPaintings(itemPainting)

function criarCardProdutosPaintings(itemPainting) {

    let imagem = itemPainting.imagem
    let nome = itemPainting.nome
    let valor = itemPainting.valor

    let li = document.createElement("li")
    let img = document.createElement("img")
    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")

    img.src = imagem
    img.alt = nome
    h1.innerText = nome
    h2.innerText = `R$ ${valor}`.replace('.', ',')

    li.appendChild(img)
    li.appendChild(h1)
    li.appendChild(h2)

    return li
}

let produtosFigure = document.querySelector(".produtos-figure")

function listarProdutosFigure(listaFigure) {

    for (let i = 0; i < listaFigure.length; i++) {

        let itemFigure = listaFigure[i]

        let cardFigure = criarCardProdutoFigure(itemFigure)

        produtosFigure.appendChild(cardFigure)

    }
}

listarProdutosFigure(itemFigure)

function criarCardProdutoFigure(itemFigure) {

    let imagem = itemFigure.imagem
    let nome = itemFigure.nome
    let valor = itemFigure.valor

    let li = document.createElement("li")
    let img = document.createElement("img")
    let h1 = document.createElement("h1")
    let h2 = document.createElement("h2")

    img.src = imagem
    img.alt = nome
    h1.innerText = nome
    h2.innerText = `R$ ${valor}`.replace('.', ',')

    li.appendChild(img)
    li.appendChild(h1)
    li.appendChild(h2)

    return li
}


