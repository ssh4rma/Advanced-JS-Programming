//create a counter function
var createCounter = function(n) {
  let cnt = n;
  return function() {
      return cnt++;
  };
};