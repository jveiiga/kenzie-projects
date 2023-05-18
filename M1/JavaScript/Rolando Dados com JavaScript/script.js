let listaNumeros = document.querySelector(".list")

function rolandoDados() { 

    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 1; i <= 1000; i++) {

        let rolandoDado1 = Math.floor(Math.random() * 6 + 1)
        let rolandoDado2 = Math.floor(Math.random() * 6 + 1)
        let result = rolandoDado1 + rolandoDado2


        count[result] += 1
    }

    let cardNumeros = criarCardNumeros(count)
    listaNumeros.appendChild(cardNumeros)
}
rolandoDados()

function criarCardNumeros(count) {
    let main = document.querySelector("main")

    for (let i = 2; i <= 12; i++) {
        let height = count[i]

        let minhaBarra = document.createElement("div")
        minhaBarra.classList.add("barra")
        minhaBarra.innerHTML = count[i]
        minhaBarra.style.height = `${height * 4}px`
        minhaBarra.innerText = i
        main.appendChild(minhaBarra)
    }
}





