const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
// console.log(fruits);

console.log(fruits.splice(0, 2, 'cherry', 'papaya'));
console.log(fruits); 

// console.log(NaN == NaN);

let a = new Number(5);
let b = new Number(6);
console.log(a === b);
console.log(a == 5);

//rest operator example 
let arr = ['A', 'B', 'C', 'D'];

let N = arr.length;
let res = [];

for(let i = 0; i < N; ++i) {
  for(let j = i + 1; j < N; ++j) {
    let t = [];
    t.push(arr[i]);
    t.push(arr[j]);
    res.push(t);
  }
}
console.log(res); //2D array
console.log(...res); //single array and all the values in single line

console.log(undefined ?? null);


//function expression and NFE
function sayHi() {
  console.log('hello user');
}

let funRes = sayHi; 
console.log(funRes);
funRes();
sayHi(); 