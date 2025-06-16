let arr = [1,3,5,1,51,60,2,88]; 

let x = 18;

let res = -1;

for(let i = 0; i < arr.length; ++i) {
  if(arr[i] === x) {
    res = i;
  }
}

console.log(res === -1 ? 'Target not found' : `${x} is at index ${res}`);