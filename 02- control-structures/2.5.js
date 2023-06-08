const readlineSync = require("readline-sync");
while (true) {
    let number = readlineSync.question('What is your favorite number?');
    if (number !== "42") {
        console.log("Are you sure?");
    } else {
        break;
    }
}
console.log("42 is a great number");