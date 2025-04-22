class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const head = new Node(1);
// console.log(head); //this will return an object and then I can acess the value of head and next pointer in that


function add_element_at_end(head, val) {
  let temp = head;
  while(temp.next) {
    temp = temp.next;
  }

  let newNode = new Node(val);
  temp.next = newNode;
  return head; 
}

function printList(head) {
  let temp = head; 
  while(temp.next) {
    console.log(temp.val);
    temp = temp.next;
  }
}


head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

printList(head);
