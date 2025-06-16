const obj = {
  name : 'shubham', 
  age : 22
}

const print = {
  greet : function() {
    return `The name of the user is ${this.name}, and their age is ${this.age}`;
  }
}

Object.setPrototypeOf(print, obj);
console.log(print.greet());

//second method
const print2 = Object.create(obj);
print2.greet = function() {
  return `The name of the user is ${this.name} and the age of the user is ${this.age}`;
}

console.log(print2.greet());