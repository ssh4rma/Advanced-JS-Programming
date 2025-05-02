const obj = {
  name : 'shubham', 
  greet() {
    return `Hello ${this.name}`;
  }
}

console.log(obj.greet()); 