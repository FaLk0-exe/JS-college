'use strict';

function getCustomRepresentOfNumber(numbers) {
    var list = [];
    for (var i = 0; i < numbers.length; i++) {
        list.push(numbers[i]);
        if (numbers[i] % 2 == 0 && i != numbers.length - 1) {
            list.push('-');
        }
    }
    return list.join('');
}
console.log(getCustomRepresentOfNumber('12187629'));