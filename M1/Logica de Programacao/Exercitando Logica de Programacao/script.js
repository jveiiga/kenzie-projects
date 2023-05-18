//CALCULATE SALARY
function calculateSalary(salarioFixo, valorDasVendas) {

    let tresPor = 0 
    let cincoPor = 0
    
    if( valorDasVendas <= 1200 ) {
        
        tresPor += ( 3 / 100 ) * valorDasVendas 
        
    }
    if( valorDasVendas > 1200 ) {
        
        let resto = valorDasVendas

        cincoPor += ( 5 / 100 ) * resto 
        
    }
    let total = salarioFixo + tresPor + cincoPor

    return total
}
console.log(calculateSalary(1200, 1200))

//CASH MACHINE
function cashMachine(valorSaque, salarioFixo, valorDasVendas) {

    let res = ''
    let resSaldoSaque = valorSaque
  
    let saldoConta = calculateSalary(salarioFixo, valorDasVendas)

    let notas = [200, 100, 50, 20, 10, 5, 2]

    for( let i = 0; i < notas.length; i++ ) {
   
        if( i === 0 && Math.floor(valorSaque / notas[i]) >= 1 ) {

            res += `${Math.floor(valorSaque/notas[i])} nota(s) de R$ ${notas[i]},00 - `
                
            resSaldoSaque = valorSaque - ((Math.floor(valorSaque / notas[i])) * notas[i])

        } else if( resSaldoSaque >= notas[i] ) {

            res += `${Math.floor(resSaldoSaque/notas[i])} nota(s) de R$ ${notas[i]},00 - `
                
            resSaldoSaque = resSaldoSaque - ((Math.floor(resSaldoSaque / notas[i])) * notas[i])

        } else if( resSaldoSaque <= notas[i] && notas[i + 1] === notas.length ) {

            res += `${Math.floor(resSaldoSaque/notas[i + 1])} nota(s) de R$ ${notas[i + 1]},00`
                
            resSaldoSaque = valorSaque - ((Math.floor(valorSaque / notas[i + 1])) * notas[i + 1])

        } else if( valorSaque < 2 ) {

            return `Valor de saque indisponível`

        }

    }

    saldoConta = (saldoConta - valorSaque).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
   
    return `Valor do saque ${valorSaque.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}, foi utilizado ${res}Saldo restante: ${saldoConta}`

}
console.log(cashMachine(350, 1200, 1200))

//CALCULATE STOCK
function calculateStock(quantidadeAtual, quantidadeMaxima, quantidadeMinima) {
    
    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

    if(quantidadeAtual  >= quantidadeMedia) {

        return `Quantidade média ${quantidadeMedia}. Não efetuar compra.`

    }else {
        
        return `Quantidade média ${quantidadeMedia}. Efetuar compra.`
    }
}
console.log(calculateStock(10, 10, 5))

//CALCULATE AGE
function calculateAge(anoNascimento, anoAtual) {

    let idadeEmAnos = anoAtual - anoNascimento
    let idadeEmMeses = idadeEmAnos * 12
    let idadeEmDias = idadeEmMeses * 30
    let idadeEmSemanas = idadeEmDias / 4

    return `Idade em anos: ${idadeEmAnos} - Idade em meses: ${idadeEmMeses} - Idade em dias: ${idadeEmDias} - Idade em semanas: ${idadeEmSemanas}`

    
}
console.log(calculateAge(1989, 2022))

//CALCULATE DIAGONAL
function getDiagonal(arr) {

    let res = []

    for( let i = 0; i < arr.length; i++ ) {
        for( let j = 0; j < arr[i].length; j++ ) {
            if( arr[i][j] === arr[0][0] ) {
                res.push(arr[i][j])
            }
            if( arr[i][j] === arr[1][1] ) {
                res.push(arr[i][j])
            }
            if( arr[i][j] === arr[2][2] ) {
                res.push(arr[i][j])
            }
        }
    }
    return res
}
console.log(getDiagonal([ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]))