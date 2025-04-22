let arr = [1, 2, 3, 4, 5];

//method 1:
console.log(arr.reverse()); //inplace reversal
console.log(arr); //array has modified

//method 2:
console.log(arr.toReversed()); //don't hamper the original array
console.log(arr); //original array is not modified