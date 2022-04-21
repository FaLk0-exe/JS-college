'use strict';

function matrix(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i == j) {
            document.writeln(' 1 ');
        } else {
            document.writeln(' 0 ');
        }
        document.writeln('<br>');
        } 
        document.writeln('----- <br>');  
    }
}
matrix(6);