const readlineSync = require("readline-sync");

/** Returns a pseudorandom number between 1 and 10. */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

/**Returns n pseudorandom number between 1 and 10
 * 
 * @param {number} n how many numbers to generate
 * @returns {number []} random numbers 
 */
function multirand(n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(rand10());
    }
    return result;
}

/**
 * 
 * @param {number[]} arr 
 * @returns {number} average of array of number
 */
function average(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let average = total / arr.length;
    return average;
}

/**
 * 
 * @param {number[]} arr 
 * @returns {number} minimum element
 */
function min(arr) {
    let minimum = Math.min(...arr);
    return minimum;
}

/**
 * 
 * @param {number[]} arr 
 * @returns {number} maximum element
 */
function max(arr) {
    let maximum = Math.max(...arr);
    return maximum
}

let numberOfRandNumbers = readlineSync.question("How many numbers would you rand? ");
let myRandNumbers = multirand(numberOfRandNumbers);
console.log(myRandNumbers);
let averageNumber = average(myRandNumbers);
let minNumber = min(myRandNumbers);
let maxNumber = max(myRandNumbers);
console.log("The average is " + averageNumber + " the minimum is " + minNumber + " and the maximum is " + maxNumber);