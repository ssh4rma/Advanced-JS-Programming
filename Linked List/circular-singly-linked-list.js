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

printList(head);
