let arr = [0,0,1,1,1,2,2,3,3,4];
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

//method 2: 2 pointer

if (n === 0) return [];

let k = 1;  
for (let i = 1; i < n; i++) {
  if (arr[i] !== arr[i - 1]) {
    arr[k++] = arr[i];
  }
}
console.log(arr.slice(0, k));