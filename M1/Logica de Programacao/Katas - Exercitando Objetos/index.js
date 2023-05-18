const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 'R$ 6.799,33'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 'R$ 12.199,13'
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 'R$ 11.099,11'
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 'R$ 14.578,25'
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 'R$ 28.399,13'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 14.350,45'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 22.109,21'
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 'R$ 15.999,13'
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 'R$ 17.251,36'
    }
]

//#1 --------------------------
function contaTotal(carros) {

    let totalCarros = []

    for (let key in carros) {

        totalCarros.push(carros[key])
    }

    return totalCarros.length
}
// console.log(contaTotal(carros))

//#2 --------------------------
function precoTotal(carros) {

    let total = 0

    for (let i = 0; i < carros.length; i++) {

        let res = carros[i].preco.replace('R$ ', '').replace('.', '').replace(',', '.')

        total += Number(res)

    }

    return total.toFixed(2)
}
// console.log(precoTotal(carros))

//#3 --------------------------
function filtraPorMarca(carros) {

    let result = []

    for (let i = 0; i < carros.length; i++) {

        if(carros[i].marca === "Chevrolet") {

            result.push(carros[i].marca + carros[i].modelo)
        }
    }
    return result
}
// console.log(filtraPorMarca(carros))

//#4 --------------------------
function filtraPorAcessorio(carros) {

    let res = []

    for (let i = 0; i < carros.length; i++) {

        let carro = carros[i]

        if(carro.acessorios !== []) {

            res.push(carros[i].acessorios)
        }
    }
    return res
}
// console.log(filtraPorAcessorio(carros))

//#5 -------------------------- *************:/[ERROR]***********
function eCarroCompleto(carros) {

    let res = []

    for (let i = 0; i < carros.length; i++) {

        if(carros[i].completo === true) {

            res.push(carros[i].completo)
        }
    }
    return res
}
// console.log(eCarroCompleto(carros))

//#6 --------------------------
function adicionaCarro(carros) {
    
    let novoCarro = {
        modelo: "modelo",
        marca: "marca",
        ano: "ano",
        cor: "cor",
        completo: false,
        acessorios: [],
        preco: 'preco'
    }

    carros.push(novoCarro)

    return carros
}
// console.log(adicionaCarro(carros))

//#7 --------------------------
function removeCarro(carros, indice) {
    // carros.splice(indice, 1)
   
    let result = []
    for (let i = 0; i < carros.length; i++) {

        let carro = carros[i]

        if(i !== indice) {
            
            result.push(carro)
        }
    }
    carros = result

    return carros
}
// console.log(removeCarro(carros, 2))

//#8 --------------------------
function contaCarrosNovos(carros) {
    
    let res = []
    
    for (let i = 0; i < carros.length; i++) {
        
        let carroAno = carros[i].ano
        let carroMarca = carros[i].marca
        let carroModelo = carros[i].modelo

        
        if(Number(carroAno) > 2012) {

            res.push(Number(carroAno))
            res.push(carroMarca)
            res.push(carroModelo)

        }
    } 
    return res
}
// console.log(contaCarrosNovos(carros))

//#9 --------------------------
function contaCarrosVelhos(carros) {

    let res = []

    for (let i = 0; i < carros.length; i++ ) {

        let carroAno = carros[i].ano
        let carroMarca = carros[i].marca
        let carroModelo = carros[i].modelo


        if(Number(carroAno) < 2012) {

            res.push(Number(carroAno))
            res.push(carroMarca)
            res.push(carroModelo)
        }
    }
    return res
}
// console.log(contaCarrosVelhos(carros))

//#10 --------------------------
function insereDono(list,position,person){
    list[position].donos = [person]
}
//Chamada da função
insereDono(carros,1,{nome: 'Jhon Dhoe', cpf: '122-133-144-55'})




