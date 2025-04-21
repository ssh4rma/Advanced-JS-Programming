let arr = [12, 11, 13, 5, 6];
let n = arr.length;

let low = 0, high = n - 1;

qs(arr, low, high);
console.log(arr);

function qs(arr, low, high) {
  if(low < high) {
    let pIdx = partition(arr, low, high);
    qs(arr, low, pIdx - 1);
    qs(arr, pIdx + 1, high);
  } 
}

function partition(arr, low, high) {
  //first select the pivot
  let pivot = arr[low];
  let i = low, j = high;

  while(i < j) {
    while(arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while(arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}


