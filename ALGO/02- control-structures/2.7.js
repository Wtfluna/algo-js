const readlineSync = require("readline-sync");
let n = readlineSync.questionInt("Enter how many numbers I will ask you: ");
let sum = 0;

for (let i = 0; i < n; i++) {
    let number = readlineSync.questionInt("Enter a new number:");
    sum += number;
}
console.log("The sum of the number is: " + sum);
