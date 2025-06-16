let promise = new Promise((res, rej) => {
  setTimeout(() => res('done', 1000));
}).then(
  res => console.log(res)
).catch(
  error => console.log(error)
)

let rejPromise = new Promise((res, rej) => {
  setTimeout(() => rej(new Error ('error'), 1000));
}).catch(err => console.log(err));

let rejPromise2 = new Promise((res, rej) => {
  setTimeout(() => rej(new Error ('error'), 1000));
}).then(null, err => console.log(err));

let resPromise = new Promise((res, rej) => {
  const id = setInterval(() => {
    console.log('Hello User');
    clearInterval(id); 
    res('Promise is resolved');
  }, 2000);
})
.then(res => console.log(res))
.finally(() => console.log('Promise is settled'));

let resPromise1 = new Promise((res, rej) => {
  throw new Error('Promise is rejected');
})
.finally(() => console.log('Promise is ready'))
.then(null, rej => console.log(rej)); 