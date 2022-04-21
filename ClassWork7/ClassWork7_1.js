'use strict';

function pow(x, n)
 {
    if(n<0)
    return -1;
    else
        return n==0 ? 1 : x*(pow(x,n-1));
} 
  var x = prompt("enter x", '');
  var n = prompt("enter n", '');
  if(n<0)
    alert("Error: enter positive value of degree!");
  else
    alert(`Result: ${pow(x,n)}`);