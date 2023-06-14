const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Please enter the minimum age:');
let maxAge = readlineSync.question('Please enter the maximum age:');
let currentAge = readlineSync.question('Please enter the current age:');

if (minAge > maxAge) {
    console.log("Sorry but it seems that you entered an invalid value");
} else if (currentAge >= minAge && currentAge <= maxAge) {
    console.log("The current age is within the specified range.");
} else
    console.log("The current age isn't within the specified range");
