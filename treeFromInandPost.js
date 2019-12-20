// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// // let iin = [9,3,15,20,7];
// // let poost = [9,15,7,20,3];

// var buildTree = function (inorder, postorder) {
//   let root = postorder.pop();
//   let lefts = inorder.splice(0, inorder.indexOf(root));
//   lefts.push(root);
//   let rootIndex = inorder.indexOf(root);
//   let tree = new TreeNode(root);
//   let findRight = (node, index = postorder.length - 1) => {
//     if (index < 0 || !node) return;
//     let poVal = postorder[index];
//     let ioIndex = inorder.indexOf(poVal);
//     let nodeValIndex = inorder.indexOf(node.val);
//     if (ioIndex > rootIndex) {
//       if (!node.right && ioIndex > nodeValIndex) {
//         node.right = new TreeNode(poVal);
//         findRight(node, index - 1);
//         findRight(node.right, index - 1);
//       }
//       if (!node.left && ioIndex < nodeValIndex) {
//         node.left = new TreeNode(poVal);
//         findRight(node, index - 1);
//         findRight(node.left, index - 1);
//       }
//     } else {
//       rootIndex = lefts.indexOf(root);
//       findLeft(tree, index);
//     }
//   }
//   let findLeft = (node, index) => {
//     if (index < 0 || !node) return;
//     let poVal = postorder[index];
//     let ioIndex = lefts.indexOf(poVal);
//     console.log(ioIndex, rootIndex, poVal);
//     if (ioIndex < rootIndex) {
//       if (!node.left && ioIndex < lefts.indexOf(node.val)) {
//         node.left = new TreeNode(poVal);
//         findLeft(node.left, index - 1);
//         findLeft(node, index - 1);
//       }
//       if (!node.right && ioIndex > lefts.indexOf(node.val)) {
//         node.right = new TreeNode(poVal);
//         findLeft(node.right, index - 1);
//         findLeft(node, index - 1);
//       }
//     }
//   }
//   findRight(tree);
//   return tree;
// };


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}



var buildTree = (inorder, postorder) => {
  let inMap = inorder.reduce((acc,v,i) => {acc[v] = i; return acc},{});
  return inMap;
}
// let iin = [9, 3, 15, 20, 7];
// let poost = [9, 15, 7, 20, 3];

let iin = [1,2,3,4];
let poost = [2,4,3,1];
console.log(buildTree(iin, poost));