users = {
  sayHi: function() {
    console.log("Hello");
  }
};
console.log(users.sayHi()); 

users = {
  sayHi() { 
    console.log("Hello");
  }
};

console.log(users.sayHi()); 
