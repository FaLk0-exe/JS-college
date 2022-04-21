'use strict';

function isNumbersAreMultiples(x,y){
    return (x % 7 == 0 || x % 11 == 0) ^ (y % 7 == 0 || y % 11 == 0) ? true : false;
}
console.log(isNumbersAreMultiples(14,22));
console.log(isNumbersAreMultiples(14,20));