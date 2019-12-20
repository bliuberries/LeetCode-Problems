class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  addChild(val) {
    this.children.push(new Node(val));
  }

  postorderRecurse(root) {
    const postorder = [];
    const traverse = (node) => {
      if (!node) {
        return;
      }

      for (let i = 0; i < root.children.length; i++) {
        traverse(node.children[i]);
      }

      postorder.push(node.val);
    };
    traverse(root);
    return postorder;
  }

  postorderIter(node) {
    let i = 0;
    let queue = [];
    let postIt = [];
    while(i < node.children.length) {
      
      i++;
      postIt.push(node.val);
    }
    return postIt;
  }
}

const tree = new Node(1);
tree.addChild(3);
tree.addChild(2);
tree.addChild(4);
tree.children[0].addChild(5);
tree.children[0].addChild(6);
console.log(tree.postorderRecurse(tree));
console.log(tree.postorderIter(tree));