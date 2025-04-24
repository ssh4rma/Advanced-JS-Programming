class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
  }
}

class Queue {
  constructor(head) {
    this.head = null;
  }

  enq(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      return this.head;
    }
    let temp = this.head;
    while(temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.next = null;
    
    return this.head;
  }

  dq() {
    if(!this.head) return null;
    return this.head.next; 
  }

  front() {
    if(!this.head) return -1;
    return this.head.val;
  }

  rear() {
    if(!this.head) return -1;
    let temp = this.head;
    while(temp.next) {
      temp = temp.next; 
    }

    return temp.val;
  }

  printQ() {
    let temp = this.head;
    while(temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }

  sizeOfQ() {
    let n = 0;
    let temp = this.head;
    while(temp) {
      n += 1; 
      temp = temp.next;
    }
    return n;
  }
}