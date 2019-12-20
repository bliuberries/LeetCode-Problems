/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let nodeA = new ListNode(1);
let nodeB = new ListNode(9);
nodeB.next = new ListNode(9);
// nodeB.next.next = new ListNode();
// nodeB.next.next.next = new ListNode();
var addTwoNumbers = function (l1, l2) {
  let List = new ListNode(0);
  let head = List;
  let carry = 0;
  let sum = 0;
  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
};


console.log(addTwoNumbers(nodeA, nodeB));