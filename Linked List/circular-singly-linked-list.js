class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
  }
}

function insertAtStart(head, val) {
  const newNode = new Node(val);
  if (!head) {
    newNode.next = newNode; 
    return newNode;
  }

  let temp = head;
  while (temp.next !== head) {
    temp = temp.next;
  }

  newNode.next = head;
  temp.next = newNode;

  return newNode;
}

function insertAtEnd(head, val) {
  const newNode = new Node(val);

  if(head.next === head) {
    head.next = newNode;
    newNode.next = head;
    return head;
  }

  let temp = head; 
  do {
    temp = temp.next;
  } while(temp.next !== head); 

  temp.next = newNode;
  newNode.next = head;

  return head; 
}

function printList(head) {
  if (!head) return;

  let temp = head;
  do {
    console.log(temp.val);
    temp = temp.next;
  } while (temp !== head);
}

let head = new Node(1);
head.next = head;

head = insertAtStart(head, 2);
head = insertAtStart(head, 3);
head = insertAtStart(head, 4);
head = insertAtStart(head, 5);
head = insertAtStart(head, 6);
head = insertAtEnd(head, 100); 

printList(head);
