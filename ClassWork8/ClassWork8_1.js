'use strict';


function checkArray(a) {
    return Object.prototype.toString.call(a) == '[object Array]' ? true : false;
}
console.log(checkArray([1, 2, 3, 4, 0]));
console.log(checkArray('adsadsa'));