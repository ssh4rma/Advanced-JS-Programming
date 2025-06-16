let arr = [0, 1, 0, 3, 12];
let n = arr.length;

let i = 0, k = 0;
while(i < n) {
  if(arr[i] !== 0) {
    arr[k++] = arr[i];
  }
  i++;
}

for(let i = k; i < n; ++i) {
  arr[i] = 0;
}

console.log(arr);