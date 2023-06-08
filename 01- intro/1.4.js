const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Can you give me your name, please?');
let Name = readlineSync.question('Can you please enter your last name: ');
let city = readlineSync.question('Can you please enter your city: ');

console.log("Hello, my name is " + Name + " " + firstName + " and I live in " + city + "!");  