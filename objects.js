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

alert(user.name); // Pete