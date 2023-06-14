function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}
let result = factorial(5);
console.log(result);