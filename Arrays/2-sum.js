// Given an array and a target sum, find two indices whose elements sum to the target.

let arr = [2, 7, 11, 15]; 
let target = 9;

let n = arr.length;

for(let i = 0; i < n - 1; ++i) {
  for(let j = i + 1; j < n; ++j) {
    if(arr[i] + arr[j] === target) {
      console.log([i, j]);
      break;
    }
  }
}