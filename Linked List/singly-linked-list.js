class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// console.log(head); //this will return an object and then I can acess the value of head and next pointer in that


function prepend (head, val) {
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

const head = new Node(1);

prepend(head, 2);
prepend(head, 3);
prepend(head, 4);
prepend(head, 5);
prepend(head, 6);
prepend(head, 7);
printList(head);
