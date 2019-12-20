var reverseList = function (head) {
  let nodes = [];
  let traverseGrab = (node) => {
    nodes.push(node);
    if (node.next) {
      traverseGrab(node.next);
    }
  }
  traverseGrab(head);
  var newList = nodes.pop();
  const addTogether = (node) => {
    node.next = nodes.pop();
    if(!nodes.length) {
      node.next.next = null;
      return;
    }
    addTogether(node.next);
  }
  if(nodes.length) addTogether(newList);
  return newList;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let string = new ListNode(1)
string.next = new ListNode(2);
string.next.next = new ListNode(3);
string.next.next.next = new ListNode(4);
string.next.next.next.next = new ListNode(5);

console.log(reverseList(string));