const treeHeight = (node) => {
  let height = typeof node.val === 'number' ? 1 : null
  let finalHeight = height;
  const traverseTree = (branch) => {
    finalHeight = height > finalHeight ? height : finalHeight;
    if(branch.left) {
      height++;
      traverseTree(branch.left);
      height--;
    }
    if(branch.right) {
      height++;
      traverseTree(branch.right);
      height--;
    }
  }
  traverseTree(node)
  return finalHeight;
}

class TreeNode {
  constructor (val) {
    this.val = val
    this.left = this.right = null;  
  }
}

let tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.left.right.right = new TreeNode(5);

console.log(treeHeight(tree));




var buildTree = function (inorder, postorder) {
  let root = postorder.pop();
  let lefts = inorder.splice(0, root);
  lefts.push(root);
  let node = new TreeNode(root);
  let index = postorder.length - 1;
  let findChildren = (parentNode, poIndex) => {
    if (poIndex < 0 || !parentNode) return;
    if (parentNode.val === inorder[inorder.length - 1]) return;
    let poVal = postorder[poIndex];
    if (parentNode.right === null) {
      if (inorder.indexOf(poVal) > inorder.indexOf(parentNode.val) || 
      lefts.indexOf(poVal) > lefts.indexOf(parentNode.val)) {
        parentNode.right = new TreeNode(poVal);
        findChildren(parentNode.right, poIndex - 1);
        findChildren(parentNode, poIndex - 1);
      }
    }
    if (parentNode.left === null) {
      if (inorder.indexOf(poVal) < inorder.indexOf(parentNode.val) ||
      lefts.indexOf(poVal) < lefts.indexOf(parentNode.val)) {
        parentNode.left = new TreeNode(poVal);
        findChildren(parentNode.right, poIndex - 1);
        findChildren(parentNode, poIndex - 1);
      }
    }
  }
  findChildren(node, index);
  return node
};