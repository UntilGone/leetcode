/**
 * 链表中倒数第k个节点
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 输入一个链表，数创该链表的倒数第K个节点
 */

const getKthFromEnd = function(head, k) {
  let slow = head;
  let fast = head;
  let idx = 0;
  while(fast) {
      if (idx >= k) {
         slow = slow.next;
      }
      fast = fast.next;
      idx++;
  }
  return slow;
};