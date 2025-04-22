// Find the number of subarrays with a sum equal to k.

let arr = [1, 1, 1];
let k = 2;

let n = arr.length;
let cnt = 0;

for(let i = 0; i < n; ++i) {
  let t = [];
  for(let j = i; j < n; ++j) {
    t.push(arr[j]);
    if(helper(t)) {
      cnt += 1;
    }
  }
}

function helper(arr) {
  let s = 0;
  for(let i of arr) s += i; 
  return s === k;
}

console.log(cnt);