// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //invalido
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] //valido
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //invalido
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] //invalido
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] //valido

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const b = [
    5, 7, 9, 5, 5, 9,
    3, 3, 9, 2, 1, 3,
    4, 6, 4, 1       
  ]

// Add your functions below:
function validateCredit (array) {
    var soma = getSoma(array);
    if(soma % 10 == 0) {
      return true;
    }
    else {
      return false;
    }
  }

function findInvalidCards(array) {
    var invalidArray = [];
    for (var i = 0; i < array.length; i++) {    
      if(!validateCredit(array[i])){
        invalidArray.push(array[i]);
      }
    }
    return invalidArray;
  }

function idInvalidCardCompanies (array) {
    var invalidCompanies = [];
    for (var i=0; i<array.length; i++) {
      var firstDigit = array[i][0];
      if(firstDigit === 3) {
        invalidCompanies.push('Amex')
      }
      else if(firstDigit === 4) {
        invalidCompanies.push('Visa')
      }
      else if(firstDigit === 5) {
        invalidCompanies.push('Mastercard')
      }
      else if(firstDigit === 6) {
        invalidCompanies.push('Discover')
      }
      else {
        invalidCompanies.push('Company not found')
      }
    }
    var finalInvalidCompanies = [...new Set(invalidCompanies)];
    return finalInvalidCompanies;
}
function stringToArray (string) {
    var array = string.split('');
    for (var i=0; i<array.length; i++) {
      array[i] = parseInt(array[i]);
    }
  return array;
}
function getSoma (array) {
    newArray = [];
    for (var i=1; i<=array.length; i++){
      if(i%2 !== 0) {
        newArray.push(array[array.length-i]);
      }
      else if(i%2 == 0) {
        var x = array[array.length-i]*2;
        if (x > 9) {
            newArray.push(x-9);
          }
          else {
            newArray.push(x); 
          }
      }
    }
    var reducer = (previousValue, currentValue) => previousValue + currentValue;
    var soma = newArray.reduce(reducer);
    return soma;
}
function invalidToValid (array) {    
    var resto = getSoma(array)%10
    var lastNumber = array[array.length-1];
    console.log(lastNumber)
    console.log(resto)    
    if(lastNumber>=resto) {
      array[array.length-1] = lastNumber - resto;
    }
    else {
        array[array.length-1] = lastNumber + resto;        
    }
    return array;
}


  
  

