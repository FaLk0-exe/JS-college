'use strict';

function findMax(args) {
    if (args[0]>args[1] && args[0]>args[2] && args[0]>args[3] && args[0]>args[4])
        return args[0];

    else if (args[1]>args[0] && args[1]>args[2] && args[1]>args[3] && args[1]>args[4])
        return args[1];

    else if (args[2]>args[0] && args[2]>args[1] && args[2]>args[3] && args[2]>args[4])
        return args[2];
        
    else if (args[3]>args[0] && args[3]>args[1] && args[3]>args[2] && args[3]>args[4])
        return args[3];
    else 
        return args[4];
    }
    var args=[-1,3,5,0,12];
console.log(findMax(args));