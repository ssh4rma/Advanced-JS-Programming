function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

//constructor function with return statement
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  
}

alert( new BigUser().name );  // Godzilla, got that object