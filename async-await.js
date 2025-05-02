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