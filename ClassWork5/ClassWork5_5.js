'use strict';

function dateCompare(date1,date2)
{
    var dateNames=['Date1','Date2'];
if(date1 > date2) {
    console.log(dateNames[0]+">"+dateNames[1]);
} else if (date1 <date2) {
    console.log(dateNames[0]+"<"+dateNames[1]);
}else {
    console.log(dateNames[0]+"-"+dateNames[1]);
}
}
dateCompare(new Date('11/14/2013 00:01'),new Date('11/14/2013 00:00')); 