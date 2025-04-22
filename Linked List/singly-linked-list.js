class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// console.log(head); //this will return an object and then I can acess the value of head and next pointer in that


function append (head, val) {
  let newNode = new Node(val);
  if(!head) {
    this.head = newNode;
  } else {
    let temp = head;
    while(temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
}

function printList(head) {
  let temp = head; 
  while(temp) {
    console.log(temp.val);
    temp = temp.next;
  }
}

function prepend(head, val) {
  const newNode = new Node(val);
  newNode.next = head;
  return newNode;
}

let head = new Node(1);

append(head, 2);
append(head, 3);
append(head, 4);
append(head, 5);
append(head, 6);
append(head, 7);

head = prepend(head, 0);
printList(head);
