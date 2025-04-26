//top view of binary tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insertNode(root, val) {
  if(!root) return new TreeNode(val);
  if(root.val < val) {
    root.right = insertNode(root.right, val);
  } else {
    root.left = insertNode(root.left, val);
  }

  return root; 
}

function helperPre(root, res) {
  if(!root) return;
  res.push(root.val); 
  helperPre(root.left, res);
  helperPre(root.right, res);
}

function preorder(root) {
  if(!root) return; 
  let res = [];
  helperPre(root, res); 
  return res;
}

let root = new TreeNode(5);
root = insertNode(root, 3);
root = insertNode(root, 6);
root = insertNode(root, 2);
root = insertNode(root, 4);

console.log(preorder(root));