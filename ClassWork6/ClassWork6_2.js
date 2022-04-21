'use strict';
function Div(x,y)
{
    return Math.floor(x/y);//integer division with good speed
}

function getArmstrongNumbers(args) {
    for (var i = 1; i < args.length; ++i)
        if(Math.pow(args[i]%10,3) + Math.pow(Div(args[i]%100,10),3) + Math.pow(Div(args[i],100),3)==args[i])
            console.log(args[i]);
    }
getArmstrongNumbers([123,371,152,153]);