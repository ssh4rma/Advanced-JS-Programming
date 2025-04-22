let arr = [1, 2, 3, 4, 5];

//method 1:
console.log(arr.reverse()); //inplace reversal
console.log(arr); //array has modified

//method 2:
console.log(arr.toReversed()); //don't hamper the original array
console.log(arr); //original array is not modified

//method 3: (hard code)

console.log(arr); //5, 4, 3, 2, 1
let n = arr.length;
for(let i = 0; i < n / 2; ++i) {
  [arr[i], arr[n-i-1]] = [arr[n-i-1], arr[i]];
}

console.log(arr); // 1, 2, 3, 4, 5