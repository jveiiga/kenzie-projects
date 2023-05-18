let maxValue = 15

function snapCrackle(maxValue) {

    let res = ''

    for( let i = 1; i <= maxValue; i++ ) {

        if( i % 2 !== 0 && i % 5 !== 0 ) {
            
            res += `Snap, ` 
            
        }else if( i % 2 === 0 && i % 5 !== 0 ) {
        
            res += `${i}, `

        }
        
        if( i % 5 === 0 && i % 2 !== 0 ) {
            
            res += `SnapCrackle, `
            
        } 
        
        if( i % 5 == 0 && i % 2 == 0 ) {
            
            res += `Crackle, `
            
        } 
    }
    
    return res

}


function primeNumber(num) { 

    for( let i = 2; i < num; i++ ){
        
        if(num % i === 0) {

            return false

        }
    }

    return num > 1

}


function snapCracklePrime(maxValue) {

    let res = ''

    for( let i = 1; i <= maxValue; i++ ) {

        const prime = primeNumber(i)

        if( i % 2 !== 0 && i % 5 !== 0 && prime === true ) {
            
            res += `SnapPrime, `
            
        }else if( i % 2 === 0 && prime === true) {
            
            res += `Prime, `
            
        }

        if( i % 2 === 0 && i % 5 !== 0 && prime === false) {

            res += `${i}, `

        }
        
        if( i % 2 !== 0 && i % 5 !== 0  && prime === false) {
            
            res += `Snap, `
            
        }

        
        if( i % 5 === 0 && i % 2 !== 0 && prime === true ) {
            
            res += `SnapCracklePrime, `
            
        } 
        
        if( i % 5 == 0 && i % 2 == 0 && prime === false) {
            
            res += `Crackle, `
            
        }

        if( i % 5 === 0 && i % 2 !== 0 && prime === false ) {
            
            res += `SnapCrackle, `
            
        }
    }
    
    return res
}
console.log(snapCrackle(maxValue))
console.log( snapCracklePrime(maxValue))

