let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let n = arr.length; 

let mx = Number.MIN_SAFE_INTEGER;
let sum = 0; 

for(let i of arr) {
  sum += i; 
  mx = Math.max(mx, sum);
  if(sum < 0) sum = 0; 
}

console.log(mx);
