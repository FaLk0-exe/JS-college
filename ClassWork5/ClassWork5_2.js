'use strict';

function sortByDescending(x,y,z) {
    if (x>y && x>z)
    {
        if (y>z)
        {
             return [x,y,z];
        } else {
            return [x,z,y];
        }
    } else if (y>x && y>z)
    {
        if (x>z)
        {
            return [y,x,z];
        } else {
            return [y,z,x];
        }
    } else if (z>x && z>y) {
        if (x>y)
        {
            return [z,x,y];
        } else {
            return [z,y,x];
        }
    }        
}
var x= 4;
var y=-2;
var z= 1;
console.log(sortByDescending(x,y,z).reverse());