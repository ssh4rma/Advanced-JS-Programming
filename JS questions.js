//create a counter function
var createCounter = function(n) {
  let cnt = n;
  return function() {
      return cnt++;
  };
};

//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

var expect = function(val) {
  return {
    toBe: function(value) {
      if(val === value) return true;
      else throw new Error("Not Equal"); 
    }, 
    notToBe: function(value) {
      if(val !== value) return true;
      else throw new Error("Equal"); 
    }
  }
};