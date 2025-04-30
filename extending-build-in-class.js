class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

const arr = new PowerArray(1,2,3,5,3,23,21);
console.log(arr.isEmpty());
const filteredArray = arr.filter((val) => val <= 10);
console.log(filteredArray.isEmpty()); 

console.log(arr.constructor === PowerArray); //true