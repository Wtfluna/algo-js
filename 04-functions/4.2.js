const readlineSync = require("readline-sync");

let length = readlineSync.question("Enter the length of the rectangle:");
let width = readlineSync.question("Enter the width of the rectangle:");

let result = calcSurface(length, width);

console.log("The surface area of the rectangle is: " + result);

function calcSurface(lenght, width) {
    let surface = lenght * width;
    return surface;
}

