/**
 * 两个链表的公共节点
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * 找到2个链表的第一个公共节点
 */


const getIntersectionNode = (headA, headB) => {
  let a = headA;
  let b = headB;
  while(a || b) {
    if (a === b) {
      return a;
    }
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return null;
}

/**
 * 第二次遇到这个题了
 * 有一点印象
 * a b两个链表谁到头了就换另一个 消除链表的长度差
 */