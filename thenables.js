const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};
