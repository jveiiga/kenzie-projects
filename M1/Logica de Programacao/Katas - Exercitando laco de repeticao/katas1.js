function oneThroughTwenty(arr) {
  
  let res = []

  for ( let i = 1; i < 21; i++ ) {

   res.push(i)

  }

  return res

}
console.log(oneThroughTwenty())

//call function oneThroughTwenty

function evensToTwenty() {
    
  let res = []

  for( let i = 1; i < 21; i++ ) {

    if( i % 2 == 0 ) {

    res.push(i)

    }
  }
  
  return res 

}
console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
    
  let res = []

  for( let i = 1; i < 21; i++ ) {

    if( i % 2 !== 0 ) {

    res.push(i)

    }
  }
  
  return res 
   
}
console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {
    
  let res = []

  for( let i = 1; i < 101; i++ ) {

    if( i % 5 == 0 ) {

    res.push(i)

    }
  }
  
  return res

}
console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {
    
  let res = []

  for( let i = 1; i < 11; i++ ) {

      res.push(i * i)
   
  }
  
  return res 

}
console.log(squareNumbers())

//call function squareNumbers

function countingBackwards() {

  let res = []

  for( let i = 20; i > 0; i-- ) {
    
    res.push(i)

  }
    
  return res

}
console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {

  let res = []

  for( let i = 20; i > 0; i-- ) {

    if( i % 2 == 0 ) {

      res.push(i)

    }
  }
    
  return res

}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let res = []

  for( let i = 20; i > 0; i-- ) {

    if( i % 2 !== 0) {

      res.push(i)

    }
  }

  return res

}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {

  let res = []

  for( let i = 100; i > 0; i-- ) {

    if( i % 5 == 0) {

      res.push(i)

    }
  }
    
  return res

}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
  let res = []

  for( let i = 10; i > 0; i-- ) {

    res.push( i * i )

  }

  return res
 
}
console.log(squareNumbersBackwards())

//call function squareNumbersBackwards
