const obj = {
  name : 'shubham', 
  greet() {
    return `Hello ${this.name}`;
  }
}

console.log(obj.greet()); 
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__ === Object.getPrototypeOf(obj));