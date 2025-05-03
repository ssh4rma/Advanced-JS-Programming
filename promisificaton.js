function loadData(callback) {
  setTimeout(() => {
    callback(null, 'data loaded');
  }, 1000);
}
