const readlineSync = require("readline-sync");
let n = readlineSync.question("Enter a number:");
let sum = 0;

for (let i = 0; i < n; i++) {
    let number = readlineSync.question("Enter a new number:");
    sum += number;
}
console.log("The sum of the number is: "+ sum);
