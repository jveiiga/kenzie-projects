let liPalavras = document.querySelector(".lista-nomes")

function getAnagramsOf(listaDePalavras, input) {

    let res = []

    for (let i = 0; i < listaDePalavras.length; i++) {

        let palavra = listaDePalavras[i].split('').sort().join('')
        input = input.split('').sort().join('')
        
        if (palavra === input) {
            
            res.push(listaDePalavras[i])
        }
    }
    return res
}

let inputBusca = document.querySelector(".campoBusca input")
let btnBusca = document.querySelector(".campoBusca button")

btnBusca.addEventListener("click", function () {

    let valor = inputBusca.value

    let valorAnagrama = getAnagramsOf(words, valor)
    let cardAnagrama = renderizandoAnagramas(valorAnagrama)

    liPalavras.appendChild(cardAnagrama)
})

function renderizandoAnagramas(valorAnagrama) {

    let p = document.createElement("p")
    p.innerText = valorAnagrama

    return p
}



