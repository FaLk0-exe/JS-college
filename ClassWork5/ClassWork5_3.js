'use strict';

var browserName = prompt("Enter browser name:");
switch(browserName) {
    case 'Edge':
        alert( "You've got the Edge");
        break;
    case 'Firefox','Safari','Opera': 
        alert("Okay too");
        break;
    default:
        break;
}