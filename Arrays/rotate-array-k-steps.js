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

//method 2: hard coding
let temp = [];

for(let j = 0; j < k; ++j) {
  temp.push(arr[j]);
}

for(let j = n - 1; j >= k; --j) {
  temp.unshift(arr[j]);
}

console.log(temp);