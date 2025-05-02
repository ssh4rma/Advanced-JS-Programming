function delay(ms) {
  return new Promise(res => setTimeout(() => {
    console.log('Hello user');
    res();
  }, ms))
}

async function helper() {
  console.log('starting');
  await delay(2000);
  console.log('function completed');
}

helper();

//fetching data from url
async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data.body);
}
fetchData(); 

//example of async function
async function example() {
  return 'hello user';
}
example().then((data) => console.log(data));