let arr = [1, 2, 3, 4];
let n = arr.length;

let totalProd = 1;
for(let i of arr) {
  totalProd *= i;
}

let res = [];

for(let i of arr) {
  let t = totalProd / i;
  res.push(t);
}

console.log(res); 