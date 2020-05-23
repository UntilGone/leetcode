/**
 * 翻转链表
 */

const { ListNode, createList } = require('../prepare/createList');

// 迭代
// function reverseList(head) {
//   let newList = null;
//   while(head) {
//     if (newList) {
//       newList = new ListNode(head.val, newList);
//     } else {
//       newList = new ListNode(head.val);
//     }
//     head = head.next;
//   }
//   return newList;
// }

// 递归
function reverseList(head, newList = null) {
  if (!head) {
    return newList;
  }
  if (newList) {
    newList = new ListNode(head.val, newList);
  } else {
    newList = new ListNode(head.val);
  }
  return reverseList(head.next, newList);
};

// Test
const head = createList([1, 2, 3, 4, 5]);
console.log(reverseList(head));