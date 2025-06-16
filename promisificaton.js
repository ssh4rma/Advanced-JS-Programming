function loadData(callback) {
  setTimeout(() => {
    callback(null, 'data loaded');
  }, 1000);
}

function loadDataPromise() {
  return new Promise((resolve, rej) => {
    loadData((err, res) => {
      if(err) rej(err);
      else resolve(res);
    }); 
  });
}

loadDataPromise()
  .then(res => console.log(res))
  .catch(err => console.log(err));