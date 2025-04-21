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

//selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].id < arr[minIdx].id) {
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
const arr = [
  { id: 4 },
  { id: 2 },
  {},
  { id: 1 }
];
console.log(selectionSort(arr));

//insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j].id > key.id) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
const arr = [
  { id: 5 },
  { id: 3 },
  {},
  { id: 2 }
];
console.log(insertionSort(arr));