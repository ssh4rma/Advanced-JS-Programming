// Find the maximum product of a contiguous subarray.

let arr = [2, 3, -2, 4];
let n = arr.length;

let res = Number.MIN_SAFE_INTEGER;

for(let i = 0; i < n; ++i) {
  let t = [];
  for(let j = i; j < n; ++j) {
    t.push(arr[j]);
    res = Math.max(res, helper(t));
  }
}

function helper(arr) {
  let p = 1;
  for(let i of arr) p *= i; 
  return p;
}

console.log(res);