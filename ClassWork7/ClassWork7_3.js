'use strict';

function IsPrimeNumber(n) {
    if (n == 1)  {
        return false;
    } else if(n == 2) {
        return true;
    } else {
        for(var i = 2; i < n; i++)  {
            if(n % i == 0) {
                return false;
            }
        }
        return true;  
    }
}
var numbers=[14,11,13,20,19,57];
numbers.forEach (number=>console.log(IsPrimeNumber(number)));