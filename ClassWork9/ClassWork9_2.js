'use strict';
var customOutput = (library)=>
library.filter(b=>b.readingStatus===true).forEach(b=>console.log(`Already read '${b.author}' by ${b.title}}`));
let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }];
    customOutput(library);