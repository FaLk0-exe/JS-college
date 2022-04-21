'use strict';

var customArrayFilter=(arr)=>arr.filter(v => !!v);
let array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
console.log(customArrayFilter(array));