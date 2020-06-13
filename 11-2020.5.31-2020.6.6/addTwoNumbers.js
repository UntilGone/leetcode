/**
 * 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 用2个非空链表表示2个正整数，它们的位数是逆序方式存储的
 * 2 -> 4 -> 3 = 342
 */

const { ListNode, showListVal, createList } = require('../prepare/createList');
const addTwoNumbers = (l1, l2) => {
  const head = new ListNode();
  let node = head;
  let add = 0;
  while(l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
    node.next = new ListNode(sum % 10);
    node = node.next;
    add = sum > 9 ? 1 : 0;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  add && (node.next = new ListNode(1));
  return head.next;
}


// Test
// console.log(showListVal(addTwoNumbers(createList([2,4,3]), createList([5,6,4])))) // [7. 0, 8]
// console.log(showListVal(addTwoNumbers(createList([5]), createList([5])))) // [0, 1]
console.log(showListVal(addTwoNumbers(createList([1]), createList([9, 9])))) // [0, 0, 1]