/**
 * Convert Binary Number in a Linked List to Integer
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * 给定一个链表，把它转换成十进制
 * @param {ListNode} head 
 */
// 链表
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 创建链表
function LinkList(arr) {
  if (arr.length) {
    let linkList = new ListNode(arr[0]);
    const insertNode = (node, idx) => {
      if (arr[idx] !== undefined) {
        node.next = new ListNode(arr[idx]);
        insertNode(node.next, idx + 1);
      }
    }
    insertNode(linkList, 1);
    return linkList;
  } else {
    return null;
  }
}
// 自己转二进制
// 这个时间复杂度就是O(n^2)
const getDecimalValueSelf = (head) => {
  let node = head;
  let rs = 0;
  const temp = [];
  while (node) {
    temp.push(node.val);
    node = node.next;
  }
  while (temp.length) {
    const num = temp.shift();
    if (num) {
      rs += Math.pow(2, temp.length);
    }
  }
  return rs;
}

// 直接通过parseInt(n, 2)把2进制转十进制
// 这样时间复杂度就变成O(n)了
const getDecimalValue = (head) => {
  let node = head;
  let rs = '';
  while (node) {
    rs += node.val;
    node = node.next;
  }
  return parseInt(rs, 2);
}
console.log(getDecimalValue(new LinkList([1, 0, 1])))

/**
 * 这道题首先需要了解链表的结构，创建链表
 * 其次了解2进制与10进制的转换
 */