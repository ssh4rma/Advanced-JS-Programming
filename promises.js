let promise = new Promise((res, rej) => {
  setTimeout(() => res('done', 1000));
});