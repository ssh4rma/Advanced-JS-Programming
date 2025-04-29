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
console.log(obj);

//using spread operator
let dest2 = {...dest};
dest2.name = 'Rajesh';
console.log(dest2);

let users = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let usr2 = {};
Object.assign(usr2, users); 
console.log(usr2); 

//Here it's a shallow copy of users object, as I changed something in the new object the same entries are modified in the usr2.
usr2.sizes.height = 190;
console.log(usr2); 
console.log(users); 

//Structured cloning (Deep cloning)

let clone = structuredClone(users);
console.log(clone); 
clone.sizes.height = 200;
console.log(clone); //200
console.log(users); //190

console.log(users.name == users); //false because users will be coerced to valueOf() and toString() method: then it will become [Object Object] and users.name is string (primitive data) so it will return false

let userss = {};
// let's create a circular reference:
// user.me references the user itself
userss.me = userss;
console.log(userss.me); 
let clone2 = structuredClone();


let user = {
  name: "John"
};

let admin = user;
console.log(admin); 
admin.name = 'shubham'; 
console.log(admin); 
console.log(user); 

//Here admin is not copy of the user, it's a reference to the user, they both are pointing to the same object, and any changes made to the original object using the different alias (admin), it will also show in the original object. 