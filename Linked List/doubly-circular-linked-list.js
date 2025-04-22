class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
    this.prev = null;
  }
}

function insertAtStart(head, val) {
  const newNode = new Node(val);
  if(!head) {
    newNode.next = newNode;
    newNode.prev = null;
    return newNode;
  }

  let tail = head.prev;

  newNode.next = head;
  newNode.prev = tail;

  head.prev = newNode;
  tail.next = newNode;

  return newNode;
}

function printList(head) {
  if(!head) return;
  let temp = head;
  
  do {
    console.log(temp.val);
    temp = temp.next;
  } while(temp !== head);
}

function insertAtEnd(head, val) {
  let tail = head.prev; 

  const newNode = new Node(val);
  tail.next = newNode;
  newNode.next = head;
  head.prev = newNode;
  newNode.prev = tail;

  return head; 
}

function insertAtPosi(head, val, posi) {
  const newNode = new Node(val);

  let temp = head;
  for(let i = 1; i < posi; ++i) {
    temp = temp.next;
  }

  newNode.next = temp.next; 
  newNode.next.prev = newNode;
  newNode.prev = temp;
  temp.next = newNode;

  return head;
}

function deleteFromStart(head) {
  let tail = head.prev;
  if(!head) return;

  if(head.next === head) {
    return null; 
  }

  let target = head.next;

  tail.next = target;
  target.prev = tail;
  
  head.prev = null;
  head.next = null;

  return target;
}

function deleteFromEnd(head) {
  let tail = head.prev;

  let target = tail.prev;

  tail.next = null;
  tail.prev = null; 

  target.next = head;
  head.prev = target; 

  return head;
}

let head = new Node(1);
head.next = head;
head.prev = head;

head = insertAtStart(head, 2);
head = insertAtStart(head, 3);
head = insertAtStart(head, 4);
head = insertAtStart(head, 5);
head = insertAtStart(head, 6);

head = insertAtEnd(head, 100);

head = insertAtPosi(head, 2000, 5);
head = deleteFromStart(head);

head = deleteFromEnd(head);
printList(head); 