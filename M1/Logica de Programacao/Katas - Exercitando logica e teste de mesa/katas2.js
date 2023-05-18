// comece a criar a sua função add na linha abaixo
// descomente a linha seguinte para testar sua função
function add(a, b) {

    let sum = a + b

    return sum
}
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
// descomente a linha seguinte para testar sua função
function multiply(a, b) {

    let res = 0

    if( b < 0 ) {

        b = -b
        a = -a

    }

    for( let i = 0; i < b; i++ ) {

        res = add(res, a)

    }
    
    return res
}
console.assert(multiply(4, -6) === -24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
// descomente a linha seguinte para testar sua função
function power(x, n) {

    let res = 1

    for( let i = 1; i <= n; i++ ) {

        res = multiply(res, x) 

    }   

    return res

}
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
// descomente a linha seguinte para testar sua função
function factorial(n) {

    let res = 1

    for( let i = 1; i <= n; i++ ) {

        res = multiply(res, i) 

    }

    return res

}
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
function fibonacci(n) {

    let res = []

    for( let i = 0; i <= n; i++ ) {

        if( i < 2 ) {
            res.push(i)
        }else {
            res.push(res[i -1] + res[i -2])
        }
    }

    return res[n]

}
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
