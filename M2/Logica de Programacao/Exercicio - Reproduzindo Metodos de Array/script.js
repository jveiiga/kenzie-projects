//Método forEach --------
const arrayForEach = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
const arrayVazio = [];
//nossa callback
function callbackForEach(element, i, array) {
  return arrayVazio.push(array[i] = element * 2);
}

function forEach(array, callback) {
  
  for (let i = 0; i < array.length; i++) {

      callback(array[i], i, array)
  }
}

console.log(forEach(arrayForEach, callbackForEach));
console.log(arrayVazio);

//Método Find --------

const arrayFind = [19, true, "alfafa", 4, 5]; // array para iteração do método

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element, i, array) {
  return element > 2 && element < 12

}

//nossa segunda callback testa se existe algum elemento maior que 15
function callbackFindTwo(element, i, array) {
  return element > 15
    
}

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return array[i]
    }
  }
  return undefined
}

console.log(find(arrayFind, callbackFind));
console.log(find(arrayFind, callbackFindTwo));

//Método IndexOf --------

const arrayIndexOf = [595, 206, "apollo", false, null, undefined, 8]; // array para iteração do método

function indexOf(array, elementoPesquisa) {
 
  for(let i = 0; i < array.length; i++) {
    if(array[i] === elementoPesquisa) {
      return i
    }
  }
  return -1
}

console.log(indexOf(arrayIndexOf, 2));
console.log(indexOf(arrayIndexOf, "apollo"));

//Método Includes --------

const arrayIncludes = [53, 2, "duck", NaN, 456, 7]; // array para iteração do método

function includes(array, element) {
  for (let i = 0; i < array.length; i++) {
    if(element > 500) {
      return true
    }else if(element === "duck") {
      return true
    }
  }
  return false
}

console.log(includes(arrayIncludes, 10));
console.log(includes(arrayIncludes, "duck"));

//Método some --------
const arrySome = [12, 82, 563, 414, null]; // array para iteração do método
const callbackSome = (element, i, array) => {
  return element > 82 && true;
};

const callbackSome2 = (element, i, array) => {
  if (element) {
    return false;
  }
};

function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])){
      return true
    }
  }
  return false
}

console.log(some(arrySome, callbackSome));
console.log(some(arrySome, callbackSome2));

//Método Join --------

const arrayJoin = ["Fogo", "no", "Parquinho"]; // array para iteração do método

function join(array, value=",") {
  let res = ""
  for (let i = 0; i < array.length; i++) {
    if(array[i] === null || array[i] === undefined) {
        array[i] = ""
    }
    if(i !== 0) {
      res += value + array[i]
    }else {
      res += array[i] 
    } 
  }
  return res
}

console.log(join(arrayJoin, " "));
console.log(join(arrayJoin, ""));
console.log(join(arrayJoin, "-"));
