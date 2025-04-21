let arr = [12, 11, 13, 5, 6];

let n = arr.length;

for(let i = 1; i < n; ++i) {
  let key = arr[i]; //a key is taken from unsored portion
  let j = i - 1; //j will start from the last index of the sorted and find the right position for the key. 
  while(j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j]; //this while loop will create position for the key to insert by pushing the sorted element by shifting the sorted elements to one position to the right
    j = j - 1; // and the next iteration of while loop will start from the j - 1. 
  }
  arr[j + 1] = key; // and insert the key to the j + 1, cause we've done j = j - 1 in the while loop
}


//my doubt: how will while loop will execeute I mean when it will encounter arr[j] <= key what will happen: 
//ANSWER: I actually forget for a moment how while loop will work, if we encounter the converse condition the while loop will stop, it means that the everything is sorted in the sorted region.

console.log(arr);