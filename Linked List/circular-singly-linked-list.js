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

function insertAtPosi(head, val, posi) {
  const newNode = new Node(val);
  if(posi === 0) {
    return insertAtStart(head, val);
  }

  let temp = head;
  for(let i = 1; i <= posi - 1; ++i) {
    temp = temp.next;
  }

  newNode.next = temp.next;
  temp.next = newNode;

  return head;
}

function deleteFirstNode(head) {
  let temp = head;

  do {
    temp = temp.next;
  } while(temp.next !== head);

  temp.next = head.next; 
  return head.next;
}

function deleteLastNode(head) {
  let temp = head;

  let prev = null;

  do {
    prev = temp;
    temp = temp.next;
  } while(temp.next !== head);
  
  temp.next = null;
  prev.next = head;
  
  return head; 
}

function deleteAnyNode(head, val) {
  let temp = head;
  let prev = null;

  do {
    prev = temp;
    temp = temp.next;
  } while(temp.val === val);

  prev.next = temp.next; 
  temp.next = null;

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

head = insertAtPosi(head, 200, 4);

head = deleteFirstNode(head);
head = deleteLastNode(head);

head = deleteAnyNode(head, 5);

printList(head);
