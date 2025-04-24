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

}