const helper = {
  then(res, rej) {
    setTimeout(() => {
      res('Promise is resolved');
    }, 1000);
  }
};

Promise.resolve(helper)
  .then(res => console.log(res))
  .catch(err => console.log(err));