let user = {
  name: 'shubham', 
  age: '22'
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); 

Object.defineProperty(user, "name", { writable: false });

let descriptor2 = Object.getOwnPropertyDescriptor(user, 'name');

user.name = 'pete';
console.log(descriptor2); 
console.log(user.name); 