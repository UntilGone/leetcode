/**
 * 从头到尾打印链表
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */

const reversePrint = (head) => {
  let res = [];
  while(head) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}

/**
 * 感觉这个题没啥意思
 */