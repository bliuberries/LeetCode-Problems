
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree = new TreeNode(7);
tree.left = new TreeNode(5);
tree.right = new TreeNode(9);
tree.left.left = new TreeNode(3);
tree.left.right = new TreeNode(6);
tree.right.left = new TreeNode(8);
tree.right.right = new TreeNode(10);
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (root, k) {
  const arr = [];
  let recurse = node => {
    if (typeof node.val === 'number') {
      if (node.left) recurse(node.left);
      arr.push(node.val);
      if (node.right) recurse(node.right);
    }
  }
  recurse(root);
  return arr[k - 1];
};

console.log(kthSmallest(tree, 3));