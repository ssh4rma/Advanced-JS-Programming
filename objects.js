let user = {
  name: 'shubham', 
  age: '22'
}


// Object.defineProperty(user, "name", { writable: false });

// let descriptor2 = Object.getOwnPropertyDescriptor(user, 'name');

// user.name = 'pete';
// console.log(descriptor2); 
// console.log(user.name); 

//non configurable
Object.defineProperty(user, 'name', {
  writable: true, 
  configurable: false
});
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(descriptor); 


user.name = 'rajesh';
console.log(user.name); 
Object.defineProperty(user, 'name', {
  writable: false
});
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); 