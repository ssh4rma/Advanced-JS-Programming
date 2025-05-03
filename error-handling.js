async function f() {
  return await Promise.reject(new Error('Promise is rejected'));
}

f();