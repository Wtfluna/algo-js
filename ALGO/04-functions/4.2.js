// function rand10() {
//     let generatedRandomNumberBetween0And0Virgule9999999 = Math.random();

//     let generatedRandomNumberBetween0And9Virgule99999 = generatedRandomNumberBetween0And0Virgule9999999 * 10;

//     let integerNumberBetween0And9 = Math.floor(generatedRandomNumberBetween0And9Virgule99999);

//     let integerNumberBetween1And10 = integerNumberBetween0And9 + 1;

//     return integerNumberBetween1And10;
// }

/** Returns a pseudorandom number between 1 and 10. */
function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

let myNumber = rand10();

console.log("The result is: " + myNumber);