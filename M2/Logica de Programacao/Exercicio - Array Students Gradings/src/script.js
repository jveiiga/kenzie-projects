let grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8]
let media = 8

function acimaDaMediaNotas(grades) {

    let resultadoNotas = []

    for (let i = 0; i < grades.length; i++) {
        
        let notas = grades[i]

        if(notas > media) {

            resultadoNotas.push(notas)
        }
    }
}

function notasMedias(grades) {

    let resultadoNotas = []  

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i]

        if(notas === media) {

            resultadoNotas.push(notas)
        }
    }
}


function notasAbaixoDaMedia(grades) {

    let resultadoNotas = []  

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i]

        if(notas < media) {

            resultadoNotas.push(notas)
        }
    }

    return resultadoNotas
}

function somaDeTodosOsGraus(grades) {
    
    let resultadoNotas = 0

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i]

        resultadoNotas += notas
    }

    return resultadoNotas
}


function mediaDeNotas(grades) {

    let mediaNotas = 0

    for (let i = 0; i < grades.length; i++) {

        let soma = somaDeTodosOsGraus(grades)

        let resultado = soma / 11
        
        mediaNotas = resultado.toFixed(2)
    }

    return mediaNotas
}

function notaMaxima(grades) {

    let maiorNota = 0

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i] 

        if (maiorNota < notas) {

            maiorNota = notas
        }
    }
    
    return maiorNota
}

function notaMinima(grades) {

    let menorNota = 0

    for (let i = 0; i < grades.length; i++) {

        let notas = grades[i] 

        if (menorNota > notas) {

            menorNota = notas
        }
    }

    return menorNota
}
console.log(notaMinima(grades))