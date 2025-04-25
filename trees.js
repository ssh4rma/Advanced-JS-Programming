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

/*
there are 3 cases:
> If the !root.left && !root.right then remove the node
> If it has only one child, then replace it with it's child
> If the node has 2 child, then connect the left child of the node to it's parent's new child, and for the right child find it's inorder predecessor (the largest node in the left subtree)
*/


function deleteNode(root, key) {
  if(!root) return null;

  if(key < root.val) {
    root.left = deleteNode(root.left, key); 
  } else if(key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    return helper(root);
  }
  
  return root;
}

function helper(root) {
  if(!root.right) return root.left;
  if(!root.left) return root.right;

  let rightChild = root.right;
  let lastRight = findLastRight(root.left); //find the last right in the left subtree
  lastRight.right = rightChild;
  return root.left;
}

function findLastRight(root) {
  if(!root) return null;
  while(root.right) {
    root = root.right;
  }

  return root;
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
root = deleteNode(root, 4); 
console.log(preorder(root));