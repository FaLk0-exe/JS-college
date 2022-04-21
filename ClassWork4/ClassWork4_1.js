'use strict';

function isNumbersInDiapasone(x,y) {
    return x >= 50 && x <= 99 || y >= 50 && y <= 99
}
console.log(isNumbersInDiapasone(50,70));
console.log(isNumbersInDiapasone(12,101));