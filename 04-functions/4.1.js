const readlineSync = require("readline-sync");
/**
 * Returns the surface area of a rectangle
 * @param {number} lenght 
 * @param {number} width 
 * @returns 
 */
function calcSurface(lenght, width) {
    let surface = lenght * width;
    return surface;
}

let length = readlineSync.question("Enter the length of the rectangle: ");
let width = readlineSync.question("Enter the width of the rectangle: ");

let result = calcSurface(length, width);

console.log("The surface area of the rectangle is: " + result);
