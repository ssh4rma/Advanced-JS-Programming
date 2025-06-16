let arr = [12, 11, 13, 5, 6, 1, 100];
let n = arr.length;

for(let i = 0; i < n - 1; ++i) {
  let min_idx = i;
  for(let j = i + 1; j < n; ++j) {
    if(arr[j] < arr[min_idx]) {
      min_idx = j;
    }
  }

  if(min_idx === i) break;
  else {
    [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
  }
}

console.log(arr);

for(let i = 0; i < n; ++i) {
  for(let j = 0; j < n; ++j) {
    if(arr[j] < arr[i]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}

console.log(arr);