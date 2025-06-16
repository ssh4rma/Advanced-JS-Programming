class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null; 
    this.left = null;
  }
}

function insert(root, val) {
  if(!root) return new TreeNode(val);
  
  if(val < root.val) {
    root.left = insert(root.left, val); 
  } else {
    root.right = insert(root.right, val);
  }

  return root; 
}

function preHelper(root, res) {
  if(root === null) return;
  res.push(root.val);
  preHelper(root.left, res);
  preHelper(root.right, res);  
}

function preorder(root) {
  let res = [];
  preHelper(root, res);
  return res;
}

function postHelper(root, res) {
  if(!root) return;
  postHelper(root.left, res);
  postHelper(root.right, res);
  res.push(root.val);
}
function postorder(root) {
  let res = [];
  postHelper(root, res); 
  return res;
}

function inHelper(root, res) {
  if(!root) return;
  inHelper(root.left, res);
  res.push(root.val); 
  inHelper(root.right, res);
}

function inorder(root) {
  let res = []
  inHelper(root, res); 
  return res; 
}

function search(root, target) {
  if(!root) return false;
  if(root.val === target) return true;
  return (search(root.left, target) || search(root.right, target));
}

function findMinNode(root, res) {
  if(!root) return;
  res = Math.min(res, root.val);
  findMinNode(root.left, res);
  findMinNode(root.right, res);
  return res; 
}

//bfs

class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }

  pushElement(val) {
    this.arr.push(val);
  }

  popElement() {
    return this.arr.shift();
  }

  sizeOfQ() {
    return this.arr.length;
  }

  empty() {
    return this.arr.length === 0;
  }
}

function bfs(root) {
  if(!root) return [];

  const q = new Queue();
  q.pushElement(root);
  let res = [];

  while(!q.empty()) {
    let node = q.popElement();
    res.push(node.val);

    if(node.left) q.pushElement(node.left);
    if(node.right) q.pushElement(node.right); 
  }

  return res; 
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3); 
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(preorder(root));
console.log(postorder(root));
console.log(inorder(root)); 

console.log(search(root,5));

let res = 1000;
console.log(findMinNode(root, res));

root = insert(root, 8);
console.log(preorder(root));

console.log(bfs(root));