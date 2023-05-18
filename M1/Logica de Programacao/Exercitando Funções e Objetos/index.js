let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
}

//#1 --------------------------
function qualIdade(pessoa) {

    let idadeAtual = 0
    let anoAtual = 2022

    idadeAtual = anoAtual - pessoa.anoNascimento

    return idadeAtual

}
console.log(qualIdade(pessoa))

//#2 --------------------------
function normalizaDado(pessoa) {

    let nomeComMaiuscula = pessoa.nome.split('')
    let res = ''

    nomeComMaiuscula[0] = nomeComMaiuscula[0].toUpperCase()  

    return nomeComMaiuscula.join('')

}
console.log(normalizaDado(pessoa))

//#3 --------------------------
function criandoListaDeUsuarios(pessoa) {

    let arrList = []

    if (pessoa.nomeDeUsuario === pessoa.nomeDeUsuario.toUpperCase()) {

        convertToLower = pessoa.nomeDeUsuario.toLowerCase()

        arrList.push(convertToLower)

    }

    return arrList

}
console.log(criandoListaDeUsuarios(pessoa))

//#4 --------------------------
function calculaVale(pessoa) {

    let res = pessoa.distanciaDoTrabalho.replace('km','')
    let valorDoLitro = 6.99

    if (pessoa.temCarro === true) {

        pessoa.valeCombustivel = (Number(res) * valorDoLitro) * 0.7
    }

    return pessoa.valeCombustivel.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

}
console.log(calculaVale(pessoa))

//#5 --------------------------
let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo: []
}

function adicionarTipo(endereco) {

    endereco.tipo.push("Casa")

    return endereco

}
console.log(adicionarTipo(endereco))

//#6 --------------------------
function adicionarEnderecoEmPessoa(endereco, pessoa){

    pessoa.endereco.push(endereco)

    return pessoa

}
console.log(adicionarEnderecoEmPessoa(endereco, pessoa))




