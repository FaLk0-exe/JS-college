'use strict';

var getKeyValuePairs=(obj) =>{
    let result = [];
    Object.keys(obj).forEach(key => {
        result.push([key, obj[key]]);
    })
    return result;
}

console.log(getKeyValuePairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
