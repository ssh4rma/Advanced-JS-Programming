class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

function insertAtStart(head, val) {
  const newNode = new Node(val);
  if(!head) return newNode;

  newNode.next = head; 
  head.prev = newNode;
  return newNode;
}

function insertAtEnd(head, val) {
  const newNode = new Node(val);
  if(!head) return newNode;

  let temp = head;
  while(temp.next != null) {
    temp = temp.next;
  }

  temp.next = newNode;
  newNode.prev = temp; 
  return head;
}

function printList(head) {
  let temp = head;

  while(temp) {
    console.log(temp.val);
    temp = temp.next;
  }
} 

function deleteNode(head, val) {
  if(!head) return null; 

  if(head.val === val) {
    let newHead = head.next;
    if(newHead) {
      newHead.prev = null;
    }
    return newHead;
  }

  let temp = head;
  while(temp) {
    if(temp.val === val) {
      if(temp.next) {
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
      } else {
        temp.prev.next = null;
      }
      break; 
    }
    temp = temp.next;
  }
  return head;
}

let head = new Node(7); 
head = insertAtStart(head, 6);
head = insertAtStart(head, 5);
head = insertAtStart(head, 4);
head = insertAtStart(head, 3);
head = insertAtStart(head, 2);
head = insertAtStart(head, 1);

head = insertAtEnd(head, 0);

head = deleteNode(head, 4);
printList(head);