let arr = [5, 3, 8, 1, 9];

let mx = Number.MIN_SAFE_INTEGER;

for(let i of arr) {
  mx = Math.max(mx, i);
}

let res = Number.MIN_SAFE_INTEGER;
for(let i of arr) {
  if(i != mx) {
    res = Math.max(res, i);
  }
}

console.log(res); 