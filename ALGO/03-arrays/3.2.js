let myArray = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < myArray.length; i++) {
  total += myArray[i];
}

let average = total / myArray.length;
console.log("Average value:", average);