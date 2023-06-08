const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me a number with decimal part please?');
let number2 = readlineSync.question(' Can you give me another number with decimal part please?');
let integerPart = Math.trunc(number1);
let result= integerPart * number2;
console.log (result);