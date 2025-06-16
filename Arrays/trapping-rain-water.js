// Given an array representing heights, calculate how much water can be trapped between bars.

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let n = arr.length;


let prevMax = [], frontMax = [];

let mx = arr[0];
for(let i = 0; i < n; ++i) {
  mx = Math.max(mx, arr[i]); 
  prevMax[i] = mx;
}

mx = arr[n - 1];
for(let i = n - 1; i >= 0; --i) {
  mx = Math.max(mx, arr[i]);
  frontMax[i] = mx; 
}

let res = 0;
for(let i = 0; i < n; ++i) {
  res += Math.min(prevMax[i], frontMax[i]) - arr[i];
}

console.log(res);