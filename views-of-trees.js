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

//top view of binary tree

function topView(root) {
  if(!root) return [];
  const q = [];
  q.push([0, root]);

  const mp = new Map();

  while(q.length > 0) {
    let temp = q.shift();

    let hd = temp[0];
    let node = temp[1];

    if(!mp.has(hd)) {
      mp.set(hd, node.val);
    }

    if(node.left) {
      q.push([hd - 1, node.left ]);
    } 

    if (node.right) {
      q.push([hd + 1, node.right]);
    }
  }

  let res = [];
  mp.forEach((val, key) => {
    res.push(val);
  }); 
  
  return res;
}

function bottomView(root) {
  if(!root) return [];
  const q = [];
  q.push([0, root]);

  const mp = new Map();

  while(q.length > 0) {
    let temp = q.shift();

    let hd = temp[0];
    let node = temp[1];

    if(mp.has(hd)) {
      mp.set(hd, node.val);
    } else mp.set(hd, node.val);

    if(node.left) {
      q.push([hd - 1, node.left ]);
    } 

    if (node.right) {
      q.push([hd + 1, node.right]);
    }
  }

  let res = [];
  mp.forEach((val, key) => {
    res.push(val);
  }); 
  
  return res;
}

//left view

function leftView(root) {
  let res = [];
  if(!root) return res;

  const q = [];
  q.push([root, 0]);

  while(q.length > 0) {
    let temp = q.shift();
    let node = temp[0], level = temp[1];

    if(res[level]) res[level].push(node.val);
    else {
      let t = [];
      t.push(node.val);
      res[level] = t;
    }

    if(node.left) q.push([node.left, level + 1]);
    if(node.right) q.push([node.right, level + 1]);
  } 

  let leftRes = [];
  for(let i = 0; i < res.length; ++i) {
    leftRes.push(res[i][0]);
  }

  return leftRes;

  //leftView(root) { //alternate approach
//     let res = [];
//     if(!root) return res;
    
//     const q = [];
//     q.push([root, 0]);
    
//     while(q.length > 0) {
//         const [node, level] = q.shift();
//         // let node = temp[0], level = temp[1]; 
        
//         if(res.length === level) {
//             res.push(node.val);
//         }
        
//         if(node.left) q.push([node.left, level + 1]);
//         if(node.right) q.push([node.right, level + 1]);
//     }
    
//     return res; 
// }
}

let root = new TreeNode(6);
root = insertNode(root, 4);
root = insertNode(root, 5);
root = insertNode(root, 2);
root = insertNode(root, 3);
root = insertNode(root, 8);

// console.log(preorder(root));
console.log(topView(root));
console.log(bottomView(root));
console.log(leftView(root));