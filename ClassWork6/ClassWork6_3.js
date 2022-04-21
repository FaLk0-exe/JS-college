'use strict';

function ASCIIPicture(n) {
    var char = '*';
    for(var i = 1; i <= n; i++)
        console.log(char.repeat(i));
}
ASCIIPicture(10);