let promise = new Promise((res, rej) => {
  setTimeout(() => res('done', 1000));
});
promise.then(
  res => console.log(res),
  error => console.log(error)
);

let rejPromise = new Promise((res, rej) => {
  setTimeout(() => rej(new Error ('error'), 1000));
});