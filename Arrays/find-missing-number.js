// Given an array of n distinct numbers from 0 to n, find the missing number.
// Example: Input: [3, 0, 1] → Output: 2

let arr = [3, 0, 1];
let n = arr.length; 

let sum = (n * (n + 1)) / 2;
let tSum = 0; 
for(let i of arr) tSum += i;

console.log(sum - tSum);


