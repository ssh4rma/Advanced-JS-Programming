function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = (left + right) / 2;
    if (arr[mid].id === target) {
      return mid;
    } else if (arr[mid].id < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const arr = [
  { id: 3 },
  { id: 1 },
  {},
  { id: 2 }
];
console.log(binarySearch(arr, 2));