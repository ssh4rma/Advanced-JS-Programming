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