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