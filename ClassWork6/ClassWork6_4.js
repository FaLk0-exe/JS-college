'use strict';
function getGCD(a,b)
{ 
    var GCD;
    while (a!=b)
    {
        if (a>b)
         a = a -b;
        else 
            b = b - a;
    }
    return a;
}
var a = 40; 
var b = 12;
console.log(getGCD(a,b));