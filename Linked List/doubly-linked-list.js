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
  return head;
}

function printList(head) {
  let temp = head;

  while(temp) {
    console.log(temp.val);
    temp = temp.next;
  }
} 

let head = new Node(7); 
head = insertAtStart(head, 6);
head = insertAtStart(head, 5);
head = insertAtStart(head, 4);
head = insertAtStart(head, 3);
head = insertAtStart(head, 2);
head = insertAtStart(head, 1);

head = insertAtEnd(head, 0);

printList(head);