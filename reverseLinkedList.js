class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = node => {
  let newList;
  const stack = [];
  const traversal = (root) => {
    if(root === null) {
      newList = stack.pop()
      createList(newList);
    } else {
      stack.push(root);
      traversal(root.next);
    }
  }
  const createList = list => {
    if(stack.length > 0) {
      list.next = stack.pop();
      createList(list.next);
    } else {
      list.next = null;
    }
  }
  traversal(node);
  return newList;
}


const List = new Node(1);
List.next = new Node(2);
List.next.next = new Node(3);
List.next.next.next = new Node(4);
console.log(reverseList(List));
