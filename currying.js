function add(a) {
  return function(b) {
    return a + b;
  }
}

let res = add(5);
console.log(res(4));