const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]

const alterandoValorPropriedade = (itemArray) => {

    const result = itemArray.map((produto) => {

        let { id, price } = produto
        if  ( id > 2 ) {
            price = 2.00
        }
        return {...produto, price}
    })
    return result
}


const filtrandoPorValor = (itemArray) => {

    const result = itemArray.filter((produto) => {

        let { id } = produto
        if  ( id <= 2 ) {
            return {...produto, id}
        }
    })
    return result
}


const buscandoValor = (itemArray) => {

    const result = itemArray.find(({product}) => {
        if(product === "Leite") {
            return product
        }
    })
    return result
}


const somaTotalProdutos = (itemArray) => {
    const result = itemArray.reduce((acc, {quantity, price}) => {
      
        let totalList = acc+(price*quantity)
        
        return totalList

    }, 0)

    return result
}


