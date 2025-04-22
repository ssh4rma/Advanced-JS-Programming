let arr = [1, 1, 2, 2, 3];
let n = arr.length;

//method 1: using set container

const st = new Set();
for(let i of arr) {
  st.add(i);
}

let res = [];
for(let i of st) {
  res.push(i); 
}

console.log(res);
//time complexity: O(n) and space complexity: O(n + n) 