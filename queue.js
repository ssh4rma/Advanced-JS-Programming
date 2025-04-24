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

  peek() {
    if(!this.head) return -1;
    return this.head.val;
  }
}