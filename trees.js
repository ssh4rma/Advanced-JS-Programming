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