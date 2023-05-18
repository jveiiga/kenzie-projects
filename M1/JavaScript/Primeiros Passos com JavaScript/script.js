const soda   = parseFloat(prompt("Digite o valor do refrigerante"))
const noodle = parseFloat(prompt("Digite o valor do macarrão"))
const pea    = parseFloat(prompt("Digite o valor do ervilha"))
const rice   = parseFloat(prompt("Digite o valor do arroz"))
const bean   = parseFloat(prompt("Digite o valor do feijão"))
const vine   = parseFloat(prompt("Digite o valor do vinho"))
const total  = soda + noodle + pea + rice + bean + vine 
let totalPair = 0
let totalOdd = 0


if( total % 2 == 0 ) {

    totalPair = (total - vine) / 2
    window.alert(`O valor total ficou em R$ ${total} reais e foi dividido por dois menos o vinho e ficou R$ ${totalPair} reais para você pagar.`)

}else {

    totalOdd = total / 2
    window.alert(`O valor total ficou em R$ ${total} reais e foi divido pra dois incluindo o valor do vinho e ficou em R$ ${totalOdd} pra cada.`)

}

