Promise.all([
  new Promise(res => setTimeout(() => res(console.log('p1 resolved')), 1000)),
  new Promise(res => setTimeout(() => res(console.log('p2 resolved'))), 2000),
  new Promise(res => res('p3 is resolved'))
]).then((res) => console.log(res));

Promise.all([
  new Promise(res => setTimeout(() => {
    console.log('p1 resolved');
    res('Result 1');
  })),
  new Promise(res => setTimeout(() => {
    console.log('p2 resolved');
    res('Result 2');
  })),
  new Promise(res => setTimeout(() => {
    console.log('p3 resolved');
    res('Result 3');
  })),
]).then(results => {
  console.log('All promises resolved:', results);
});

Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(res => console.log(res)); 

var urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let request = urls.map((url) => fetch(url));

Promise.all(request)
  .then((res) => res.forEach(res => console.log(`${res.url}: ${res.status}`)));

//Example for Promise.allSettled

urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
];

Promise.allSettled(urls.map((url) => fetch(url)))
  .then((res) =>  {
    res.forEach((status, num) => {
      if(status === 'fulfilled') {
        console.log(`${urls[num]}: ${result.value.status}`);
      } 
      if(status === 'rejected') {
        console.log(`${urls[num]}: ${result.reason}`);
      }
    })
  })