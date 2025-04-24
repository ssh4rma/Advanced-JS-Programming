const mp = new Map();
const arr = [1, 3, 4, 5, 1, 1, 5, 1, 1, 1];

for(let i of arr) mp.set(i, (mp.get(i) || 0) + 1);
// console.log(mp);

mp.forEach((val, key) => {
  console.log(`Key: ${key} has frequency of ${val}`);
})