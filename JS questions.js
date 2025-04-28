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

//counter function with increment, decrement and reset methods
var createCounter = function(init) {
  let value = init;
  return {
    increment : function() {
      return value += 1;
    },
    decrement: function() {
      return value -= 1;
    }, 
    reset: function() {
      return value = init;
    }
  }
};

//composition funciton
var compose = function(functions) {
    
  return function(x) {
    for(let i = functions.length - 1; i >= 0; --i) {
      x = functions[i](x);
    }
    return x; 
  }
};

//length of the args in the function argument
var argumentsLength = function(...args) {
  return args.length;
};