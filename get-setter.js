let users = {
  name : 'shubham', 
  age : 22,

  get Data() {
    return `The name of the user is ${this.name} and their age is ${this.age}`;
  },

  set updateData(val) {
    this.age = val;
  } 
};

console.log(users.Data);
users.updateData = 23;
// console.log(users);
console.log(users.Data);
