class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
  }
}

class Stack {
  constructor(head) {
    this.head = head; 
  }  

  pushElement(head, val) {
    const newNode = new Node(val);
    if(!head) return newNode;
    newNode.next = head; 
    return newNode;    
  }

  popElement(head) {
    if(!head.next || !head) return null; 
    return head.next;
  }

  peek(head) {
    if(!head) return -1;
    return head.val;
  }

  sizeOfStack(head) {
    if(!head) return -1;
    let cnt = 0;
    let temp = head;
    while(temp.next) {
      cnt += 1;
      temp = temp.next; 
    }
    return cnt;
  }

  isEmpty(head) {
    return head === null;
  }

  printStack(head) {
    if(!head) return;
    let temp = head;
    while(temp.next) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

let head = new Node(1);
const st = new Stack();
head = st.pushElement(head, 1);
head = st.pushElement(head, 2);
head = st.pushElement(head, 3);
head = st.pushElement(head, 4);
head = st.pushElement(head, 5);
head = st.pushElement(head, 6);

console.log(`Top element is ${st.peek(head)}`); // Top element is 6
console.log(`Stack is ${st.isEmpty(head) === false ? 'Not empty' : 'empty'}`);