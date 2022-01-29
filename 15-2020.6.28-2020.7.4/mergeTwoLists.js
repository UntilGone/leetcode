/**
 * 合并两个排序的链表
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 */

function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}
const mergeTwoLists = (l1, l2) => {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    return new ListNode(l1.val, mergeTwoLists(l1.next, l2));
  } else {
    return new ListNode(l2.val, mergeTwoLists(l1, l2.next));
  }
};

/**
 * 这道题是第二次做了
 * 利用递归
 */
