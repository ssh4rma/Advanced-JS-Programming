//2 objects are equal if they reference to same object.
let a = {};
let b = a;

console.log(a === b); //true
console.log(a == b); //true 


//object comparision
let c = {};
let d = {}; 
console.log(c > d); 

//const objects
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

//cloning the object 
const obj = {
  name: 'John',
  age: 22
};

const obj2 = {};

for(let key in obj) {
  obj2[key] = obj[key];
}

obj2.name = 'Pete';
console.log(obj2);

//using Objects.assign() method
let dest = {};
Object.assign(dest, obj);
console.log(dest);
dest.name = 'Shubham';
console.log(dest); 