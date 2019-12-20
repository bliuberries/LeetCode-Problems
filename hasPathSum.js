const hasPathSum = (tree, sum) => {
  let match = false;
  let pathSum = 0;
  let traverseSum = (node) => {
    if(node === null) return;
    pathSum += node.val
    // console.log(pathSum);
    if(!node.left && !node.right) {
      if(pathSum === sum) match = true;
      if(match) return;
    }
    traverseSum(node.left);
    traverseSum(node.right);
    pathSum -= node.val;
  }
  traverseSum(tree);
  return match;
}

class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = null;  
  }
}

const Tree = new Node(5);
Tree.left = new Node(4);
Tree.right = new Node(8);
Tree.left.left = new Node(11);
Tree.right.left = new Node(13);
Tree.right.right = new Node(4);
Tree.left.left.left = new Node(7);
Tree.left.left.right = new Node(2);
Tree.right.right.right = new Node(1);
console.log(hasPathSum(Tree, 22));