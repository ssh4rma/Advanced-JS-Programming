function add(a) {
  return function(b) {
    return a + b;
  }
}

let res = add(5);
console.log(res(4));


const add2 = (a) => (b) => a + b;
console.log(add2(5)(4));