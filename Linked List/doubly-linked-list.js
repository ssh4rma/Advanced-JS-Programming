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

function serarchNode(head, val) {
  let temp = head;

  while(temp) {
    if(temp.val === val) return true;
    temp = temp.next;
  }

  return false;
}

function insertAtPosi(head, posi, val) {
  if(!head) return null;

  let temp = head;
  for(let i = 1; i <= posi - 1; ++i) {
    temp = temp.next; 
  }

  let newNode = new Node(val);
  
  newNode.next = temp.next;
  newNode.prev = temp;
  temp.next = newNode; 
  if(newNode.next) {
    newNode.next.prev = newNode;
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

head = insertAtPosi(head, 2, 100);
printList(head);