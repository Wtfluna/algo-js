let originalArray = [1, 2, 3, 4, 5];
let duplicateArray = [];

for (let i = 0; i < originalArray.length; i++) {
  duplicateArray.push(originalArray[i]);
}

console.log("Original Array:", originalArray);
console.log("Duplicate Array:", duplicateArray);