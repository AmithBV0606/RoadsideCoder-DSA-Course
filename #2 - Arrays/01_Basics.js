// Arrays in Javascript

// Decalaration
let person = {
  name: "Piyush",
  age: 25,
};
  
let arr = ["apple", "banana", "cherry", person];
  
console.log(arr.length); // know the length of an array

// __________________________________________________________________________________________
  
// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");

// Remove From End of the Array
arr.pop();
arr.pop();

// Add to Top of the Array
arr.unshift("orange");

// Remove From Top of the Array
arr.shift();

// ___________________________________________________________________________________________

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}

// ___________________________________________________________________________________________

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5;
});

// filter in javascript
numbers.filter((item, index, array) => {
  return item > 3;
});

// reduce in javascript
numbers.reduce((prev, item) => {
  return prev + item;
}, 2);

// some in javascript
numbers.some((item, index, array) => {
  return item > 3;
});

// every in javascript
numbers.every((item, index, array) => {
  return item < 10;
});

// find in javascript
numbers.find((item, index, array) => {
  return item > 3;
});

// ________________________________________________________________________________________

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
  return numbers;
}

// console.log(sum(nums, nums2, 5, "hello"));

// ________________________________________________________________________________________

// # More Array Methods

// concat
console.log(nums.concat(nums2, arr));

// Slice
console.log("Slice : ",arr.slice(-2));
console.log("After Slice : ", arr);

// Splice
console.log("Deleted : ",arr.splice(1, 2, "orange"));
console.log("New : ", arr);

// Fill
const dummy = [2, 5, 1, 6];
console.log(dummy.fill(9, 2, 4));

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
console.log(index);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
console.log(flattenedArray);

// reverse
nums.reverse();
console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);