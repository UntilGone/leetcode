/**
 * 翻转链表
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * @param {ListNode} head
 * @return {ListNode}
 */

const { ListNode, createList } = require('../prepare/createList');

const reverseList = (head, list = null) => {
  if (!head) {
    return list;
  }
  if (list) {
    list = new ListNode(head.val, list);
  } else {
    list = new ListNode(head.val);
  }
  return reverseList(head.next, list);
}

// Test
const head = createList([1, 2, 3, 4, 5]);
console.log(reverseList(head));

/**
 * 第二次做
 * 感觉做过的题几乎没啥印象一样
 * 这个也是递归
 */