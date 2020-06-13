/**
 * Delete Node in a Linked List
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * 删除链表里的节点
 * 给定了链表 4 5 1 9
 */
const { createList } = require('../prepare/createList');
const deleteNode = (node) => {
  if (!node.next) return;
  node.val = node.next.val
  node.next = node.next.next;
}

// Test
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1))  // 1


/**
 * 感觉这个题有点智障
 * 链表固定了？？
 * 而且固定就移除第二个节点？？？
 * 我人傻了
 * 移除链表就是把pre.next = next  跳过current
 */