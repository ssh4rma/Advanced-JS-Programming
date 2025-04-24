let arr = [1, 2, 3, 4, 5, 6]; 

let n = 3;
let mx = -1; 

for(let i = 1; i <= n; ++i) {
  mx = -1;
  let idx = -1;

  for(let j = 0; j < arr.length; ++j) {
    if(arr[j] > mx) {
      mx = arr[j];
      idx = j;
    }
  }
  arr.splice(idx, 1);
}

console.log(mx); 

//method 2:
let res = -1;
function helper(arr) {
  let mx = -1;

  for(let i of arr) {
    mx = Math.max(mx, i);
  }

  return mx;
}

let temp = [...arr];

for(let i = 1; i <= n; ++i) {
  let mx = helper(arr);
  res = mx;
  temp = temp.filter((val) => val !== mx);
}

console.log(res);