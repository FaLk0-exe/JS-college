'use strict';

function intReverse(n)
{
    return parseInt(String(n).split("").reverse().join(""));
}
console.log(intReverse(121876));