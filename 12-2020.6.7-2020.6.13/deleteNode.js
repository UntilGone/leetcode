/**
 * 删除链表的节点
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * 这个是LeetCodeCN对之前的那个删除节点的题的改变
 * 这个就正常多了，给定一个链表，删除某一个节点
 */

const deleteNode = (head, val) => {
  let node = new ListNode(0);
  node.next = head;
  let per = node;
  let curr = node.next;
  while(curr) {
    if (curr.val === val) {
      per.next = curr.next;
    }
    curr = curr.next;
    per = per.next;
  }
  return node.next;
}

/**
 * 本来想说这个题贼简单
 * 结果还是提交了几次才通过
 * 做链表的问题一定要考虑清楚第一节点和最后一个节点的操作
 */