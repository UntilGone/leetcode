/**
 * Remove Duplicates from Sorted List
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * 从已经排序了的链表里移除重复的项
 * @param {ListNode} head 
 */
const { createList, showListVal } = require('../prepare/createList');
const deleteDuplicates = (head) => {
  let curr = head;
  while(curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

// Test
console.log(showListVal(deleteDuplicates(createList([1,1,2])))); // [1, 2]
console.log(showListVal(deleteDuplicates(createList([1,1,2,3,3])))); // [1, 2, 3]

/**
 * 这个比较简单，链表最基础的操作
 * 遍历链表就可以了
 * 时间复杂度为O(n)
 */