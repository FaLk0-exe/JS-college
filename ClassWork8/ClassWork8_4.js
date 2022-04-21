'use strict';

var str = 'The Quick Brown Fox';  
 
function toReverseRegister(str) {
  var result=[];
  str.split('').forEach(c => {c.toUpperCase()==c ? result.push(c.toLowerCase()) : result.push(c.toUpperCase());
  });
  return result.join('');
}

console.log(toReverseRegister(str));