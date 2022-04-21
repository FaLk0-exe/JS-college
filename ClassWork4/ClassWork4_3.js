'use strict';

function toTime(num) {
    if(num>=0)
        return String(parseInt(num/60)) + 'год. ' + String(num%60)+ 'хв.'; 
    return null;
}
console.log(toTime(81));
console.log(toTime(450));
console.log(toTime(-2));