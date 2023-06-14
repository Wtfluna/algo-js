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

let numberOfRandNumbers = readlineSync.question("How many numbers would you rand? ");

let myRandNumbers = multirand(numberOfRandNumbers);

console.log(myRandNumbers);  