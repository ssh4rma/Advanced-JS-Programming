Promise.all([
  new Promise(res => setTimeout(() => res(console.log('p1 resolved')), 1000)),
  new Promise(res => setTimeout(() => res(console.log('p2 resolved'))), 2000),
  new Promise(res, rej => rej(new Error('p3 not resolved')))
]).catch(rej => console.log(rej));