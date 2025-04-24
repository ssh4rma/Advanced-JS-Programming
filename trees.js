class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null; 
    this.left = null;
  }
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

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3); 
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(preorder(root));
console.log(postorder(root));

