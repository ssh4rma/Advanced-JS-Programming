class MergeSort {
  conquer(arr, low, high, mid) {
    let temp = [];
    let left = low, right = mid + 1;
  
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left += 1;
      } else {
        temp.push(arr[right]);
        right += 1;
      }
    }
  
    while (left <= mid) {
      temp.push(arr[left]); 
      left += 1;
    } 
    while (right <= high) {
      temp.push(arr[right]);
      right += 1;
    }
  
    for (let i = low; i <= high; ++i) {
      arr[i] = temp[i - low];
    }
  }
  
  divide(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor(low + (high - low) / 2);
    this.divide(arr, low, mid); 
    this.divide(arr, mid + 1, high); 
    this.conquer(arr, low, high, mid); 
  }
}

let arr = [12, 11, 13, 5, 6];
let n = arr.length;

const ms = new MergeSort();
ms.divide(arr, 0, n - 1);
console.log(arr); 