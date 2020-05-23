/**
 * 移除链表中倒数第N个节点
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 链表和N都是有效的
 */
const { createList, showListVal } = require('../prepare/createList');

var removeNthFromEnd = (head, n) => {
  var fast = head;
  var slow = head;
  while (--n) {
    fast = fast.next;
  }
  if (!fast.next) {
    return head.next;
  }
  fast = fast.next;
  while(fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};

/**
 * 又是快慢指针的使用
 * 首先让快指针走到n
 * 正序需要移除的就是 l - n
 * 如果fast.next没了 说明n就是指针的长度 那么只要去掉第一个就好了
 * 如果fast.next存在 那么让fast 和 slow同时前进 fast走完的时候就到了需要移除的节点
 * （所以fast要先走一步  才能通slow.next = slow.next.next跳过移除的节点）
 */

// Test
console.log(
  showListVal(
    removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2)
  )
); // [1, 2, 3, 5]