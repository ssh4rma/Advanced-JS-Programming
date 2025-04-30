let user = {
  name: 'shubham', 
  age: '22'
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor); 

