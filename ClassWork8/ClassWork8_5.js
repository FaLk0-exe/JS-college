'use strict';

var getDiff=(numbers1,numbers2)=> numbers1.filter(n=> !numbers2.includes(n)).concat(numbers2.filter(n=> !numbers1.includes(n)));

console.log(getDiff([1,2,3],[100,2,1,10]));