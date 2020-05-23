/**
 * 获取2个链表相交的节点
 */
const { createIntersectionList, showListVal } = require('../prepare/createList');

const getIntersectionNode = (headA, headB) => {
  let pA = headA;
  let pB = headB;
  while (pA || pB) {
    if (pA === pB) {
      return pA;
    }
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return null;
}

/**
 * 这个有点花
 * 本来自己写了一个比较智障的
 * 翻转2个链表 然后找到val不相同的那个节点 返回这个节点的 next
 * 后来发现 val相同并不代表是同一个节点有点蠢
 * 这个通过消除两个链表的高度差来找到那个节点
 * 当A遍历完了 就pA = pB， B也一样
 * 假设 A长度为 LA, B长度为 LB, 且LA < LB    pA pB分别用来遍历
 * 当pA为null的时候 被赋值了headB 继续遍历 LB - LA次
 * 这时候LB就变成了headA 高度差就消除了
 * 我他🐴  这些人是魔鬼么  怎么想到的 也太秀了
 */
// Test
// const lists = createIntersectionList([4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5], 8);
const lists = createIntersectionList([0, 9, 1, 2, 4], [3, 2, 4], 2);
console.log(showListVal(getIntersectionNode(...lists)));