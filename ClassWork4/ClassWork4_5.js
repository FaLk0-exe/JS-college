'use strict';

function getCustomCityName(str) {
    return str.startsWith('Los')||str.startsWith('New') ? str.split(' ')[1] : '';
}
console.log(getCustomCityName("New York"));
console.log(getCustomCityName("Los Santos"));
console.log(getCustomCityName("Ukraine"));