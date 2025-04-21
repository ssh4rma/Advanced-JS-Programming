class Sorting {
  binary_search(arr, x) {
    let low = 0, high = arr.length - 1; 
    let res = -1;

    while(low <= high) {
      let mid = Math.floor(low + (high - low) / 2);

      if(x === arr[mid]) {
        res = mid; 
        break;
      }
      if(x > arr[mid]) low = mid + 1;
      else high = mid - 1;
    }

    let str = (res === -1 ? 'Target Not Found' : `${x} is found at index ${res} in the array`);
    return str;
  }
}

let arr = [12, 11, 13, 5, 6];
let x = 11;


function bubble_sort(arr) {
  let n = arr.length;

  for(let i = 0; i < n; ++i) {
    for(let j = i + 1; j < n - i; ++j) {
      if(arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(bubble_sort(arr));
const s = new Sorting;
console.log(s.binary_search(arr, x));
