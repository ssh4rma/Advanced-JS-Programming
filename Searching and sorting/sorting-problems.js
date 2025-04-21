//bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].id > arr[j + 1].id) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const arr = [
  { id: 3 },
  { id: 1 },
  {},
  { id: 2 }
];
console.log(bubbleSort(arr));