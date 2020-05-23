/**
 * 求链表的中间节点
 * https://leetcode.com/problems/middle-of-the-linked-list/
 */
const { createList } = require('../prepare/createList');

const middleNode = function(head) {
  if (!head) return null;
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

/**
 * 快慢指针的使用
 * 快的一次走2个 慢的一次走1个  所以当快的走完的时候  slow刚好在middle
 * 这样的话时间复杂度是O(n) 空间复杂度是O(1)
 * 还有个办法是转换成数组
 * 遍历list，把每个节点存入数组，然后取数组中间的节点就好
 */

// Test
const list = createList([1,2,3,4,5]);
console.log(middleNode(list));