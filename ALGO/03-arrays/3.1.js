let myArray = [100, 101, 102];
let total = 0;

// for (let i = 0; i < myArray.length; i++) {
//   total += myArray[i];
// }
for (let elem of myArray) {
  total += elem;
  console.log(elem);
}

console.log("Sum of array elements:", total);