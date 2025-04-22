let arr = [1, 2, 3, 4, 5];
let k = 3;

let n = arr.length;
k = k % n;

//method 1:
let i = n - 1, cnt = 0;

while(cnt != k) {
  arr.unshift(arr[i]);
  arr.pop();
  cnt++;
}

console.log(arr);