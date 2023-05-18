const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(sampleArray) {
    console.log(kata1())
    console.log(kata2())
    console.log(kata3())
    console.log(kata4())
    console.log(kata5())
    console.log(kata6())
    console.log(kata7())
    console.log(kata8())
    console.log(kata9())
    console.log(kata10(sampleArray))
    console.log(kata11(sampleArray))
    console.log(kata12(sampleArray))
    console.log(kata13(sampleArray))
    console.log(kata14(sampleArray))
    console.log(kata15())
    console.log(kata16(sampleArray))
    console.log(kata17(sampleArray))
    console.log(kata18(sampleArray))
}
showResults(sampleArray)

function kata1(arr) {
    let res = []
    for( let i = 1; i <= 25 ; i++ ) {
        res.push(i)   
    }
    return res
}


function kata2() {
   let res = []
   for( let i = 25; i > 0; i-- ) {
        res.push(i)
   }
   return res
}


function kata3() {
    let res = []
    for( let i = -1; i >= -25; i-- ) {
        res.push(i)
    }
    return res
}


function kata4() {
    let res = []
    for( let i = -25; i <= -1; i++ ) {
        res.push(i)
    }
    return res
}


function kata5() {
    let res = []
    for( let i = 25; i >= -25; i-- ) {
        if( i % 2 !== 0 ) {
            res.push(i)
        }
    }
    return res
}


function kata6() {
    let res = []
    for( let i = 3; i <= 100; i++ ) {
        if( i % 3 == 0 ) {
            res.push(i)
        }
    }
    return res
}


function kata7() {
    let res = []
    for( let i = 7; i <= 100; i++ ) {
        if( i % 7 == 0 ) {
            res.push(i)
        }
    }
    return res  
}


function kata8() {
    let res = []
    for( let i = 100; i >= 3; i-- ) {
        if( i % 3 == 0 || i % 7 == 0 ) {
            res.push(i)
        }
    }
    return res
}


function kata9() {
    let res = []
    for( let i = 5; i <= 100; i++ ) {
        if( i % 2 !== 0 && i % 5 == 0 ) {
            res.push(i)
        }
    }
    return res
}


function kata10(arr) {
    let res = []
    for( let i = 0; i < arr.length; i++ ) {
        res.push(arr[i])
    }
    return res
}


function kata11(arr) {
    let res = []
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] % 2 == 0 ) {
            res.push(arr[i])
        }
    }
    return res
}


function kata12(arr) {
    let res = []
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] % 2 !== 0 ) {
            res.push(arr[i])
        }
    }
    return res
}


function kata13(arr) {
    let res = []
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] % 8 == 0 ) {
            res.push(arr[i])
        }
    }
    return res
}


function kata14(arr) {
    let res = []
    for(  let i = 0; i < arr.length; i++ ) {
        res.push(arr[i] * arr[i])
    }
    return res
}


function kata15() {
    let res = 0
    for( let i = 1; i <= 20; i++ ) {
        res += i
    }
    return res
}


function kata16(arr) {
    let res = 0
    for( let i = 0; i < arr.length; i++ ) {
        res += arr[i]
    }
    return res
}


function kata17(arr) {
    let minValue = arr[0]
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] < minValue ) {
            minValue = arr[i]
        }
    }
    return minValue
}


function kata18(arr) {
    let maxValue = arr[0]

    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] > maxValue ) {
            maxValue = arr[i]
        }
    }
    return maxValue
}


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
