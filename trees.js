class TreeNode {
  constructor(val) {
    this.val = val;
    this.right = null; 
    this.left = null;
  }
}

function helper(root, res) {
  if(root === null) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);  
}

function preorder(root) {
  let res = [];
  helper(root, res);
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

