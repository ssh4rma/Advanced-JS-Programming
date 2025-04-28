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

//Write a function to call a function at most once and after that it should only return undefined

var once = function(fn) {
  let i = 1;
  return function(...args){
    if(i === 1) {
      i += 1; 
      return fn(...args); 
    }

    return undefined; 
  }
};

//Memoize a function
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    let key = JSON.stringify(args);
    if(cache.has(key)) {
      return cache.get(key);
    }
    
    let res = fn(...args);
    cache.set(key, res);
    return res; 
  }
}

//Add 2 promise
var addTwoPromises = async function(promise1, promise2) {
  let val1 = await promise1;
  let val2 = await promise2;
  return val1 + val2;
};
