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

//async function that will sleeps for millis
async function sleep(millis) {
  await new Promise(resolve => setTimeout(resolve, millis)); 
} 

//chunk array
var chunk = function(arr, size) {
  let n = arr.length;
  if(size <= 0 || n === 0) return []; 

  let res = []; 
  let t = [];

  for(let i = 0; i < n; ++i) {
    t.push(arr[i]);

    if(t.length === size) {
      res.push(t);
      t = [];
    }
  }

  if(t.length > 0) 
    res.push(t); 
  
  return res; 
};

//Implement Array.prototype.last() method, and assume JSON.parse() is the array
Array.prototype.last = function() {
  let n = this.length;
  if(n === 0) return -1; 
  return this[n-1];
};


//Implement Group by method
Array.prototype.groupBy = function(fn) {
  let res = {};
  let n = this.length;
  
  for(let i = 0; i < n; ++i) {
    let key = fn(this[i]);
    if(!res[key]) {
      res[key] = [];
    }
    res[key].push(this[i]);
  }    
  return res; 
};

//flatten the array (dynamic code) without using Array.flat() method

var flat = function (arr, n) {
  const st = [...arr.map(item => [item, n])]; 
  const res = [];

  while(st.length > 0) {
    const [item, depth] = st.pop();

    if(Array.isArray(item) && depth > 0) {
      st.push(...item.map(subItem => [subItem, depth - 1])); 
    } else {
      res.push(item);
    }
  }
  return res.reverse(); 
};