async function f() {
  return await Promise.reject(new Error('Promise is rejected'));
}

f();

let allP = [];
Promise.all(allP)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));