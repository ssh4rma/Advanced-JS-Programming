async function f() {
  return Promise.resolve(1);
}

f().then((res) => console.log(res));

async function helper() {
  let pr = new Promise((res, rej) => {
    setTimeout(() => {
      res('Promise resolved!');
    }, 1000);
  });

  let res = await pr; 
  console.log(res); 
}

helper(); 