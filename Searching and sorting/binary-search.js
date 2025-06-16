let arr = [1,2,4,5,10,15];

let x = 15;

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

console.log(res === -1 ? 'Target Not Found' : `${x} is found at index ${res} in the array`);

//Mistake I was making: Use Math.floor to ensure mid is an integer