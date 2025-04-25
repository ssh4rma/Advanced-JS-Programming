class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insertBST(root, val) {
  if(!root) {
    return new TreeNode(val);
  }

  if(root.val < val) {
    root.right = insertBST(root.right, val);
  } else {
    root.left = insertBST(root.left, val);
  }

  return root;
}

function helper(root, res) {
  if(!root) return; 
  res.push(root.val); 
  helper(root.left, res);
  helper(root.right, res);
}

function preorder(root) {
  let res = [];
  helper(root, res); 
  return res; 
}

//Maximum depth of the binary tree

function maxDepth(root) {
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

//Lowest common ancestor
function lca(root, a, b) {
  if(!root || root === a || root === b) return root;
  let l = lca(root.left, a, b);
  let r = lca(root.right, a, b);

  if(l && r) return root;
  return l || r;
}

//Delete a node in BST
function delNode(root, target) {
  if(!root) return null;
  
  if(root.left && root.left === target) {
    if(target.left) {
      root.left = target.left;
    }
  } else if(root.right && root.right === target) {
    if(target.right) {
      root.right = target.right;
    }
  }

  delNode(root.left, target);
  delNode(root.right, target);

  return root; 
}

//Diameter of the BST
function dia(root) {
  let mx = -Infinity;

  function helper(root) {
    if(!root) return 0;

    let l = helper(root.left);
    let r = helper(root.right);

    mx = Math.max(mx, l + r);

    return 1 + Math.max(l, r);
  }
  
  helper(root);
  return mx;
}

let root = new TreeNode(1);
root = insertBST(root, 2);
root = insertBST(root, 3);
root = insertBST(root, 4);
root = insertBST(root, 5);

console.log(preorder(root));

console.log(maxDepth(root));

console.log(lca(root, root.right, root.right.right));

// root = delNode(root, root.right);
console.log(preorder(root));

console.log(dia(root));