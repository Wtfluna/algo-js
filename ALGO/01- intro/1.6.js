const readlineSync = require("readline-sync");

let number1 = readlineSync.question('Can you give me an integer number please?');
let number2 = readlineSync.question(' Can you give me another integer number please?');
let result = number1 % number2;
console.log(result);