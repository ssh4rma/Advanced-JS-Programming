let arr = [1, 2, 3, 4, 5];
let n = arr.length;

let mx = Number.MIN_SAFE_INTEGER, mn = Number.MAX_SAFE_INTEGER;

for(let i of arr) {
  mx = Math.max(mx, i);
  mn = Math.min(mn, i);
}

console.log(mx , mn);
