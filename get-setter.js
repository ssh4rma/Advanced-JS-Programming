let users = {
  name : 'shubham', 
  age : 22,

  get Data() {
    return `The name of the user is ${this.name} and their age is ${this.age}`;
  }
};

console.log(users.Data);

