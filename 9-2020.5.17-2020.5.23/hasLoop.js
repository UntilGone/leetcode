/**
 * 判断一个单链表是否有环
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

const createList = (arr) => {
  const val = arr.shift();
  if (typeof val === 'undefined') {
    return null;
  }
  return new ListNode(val, createList(arr));
}

const createLoopList = (list, pos) => {
  if (pos < 0) {
    return list;
  }
  else {
    let index = 0;
    let node = list;
    let loop = null;
    while (node.next) {
      if (index === pos) {
        loop = node;
      }
      index++;
      node = node.next;
    }
    node.next = loop;
    return list;
  }
};

// 增加标记
// const hasCycle = (head) => {
//   while(head) {
//     if (head.flag) return true;
//     head.flag = true;
//     head = head.next;
//   }
//   return false;
// }
/**
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */


// 快慢指针
const hasCycle = (head) => {
  if (!head || !head.next) {
    return false;
  }
  let fast = head.next.next;
  let slow = head.next;
  while(fast !== slow) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
}
/**
 * 时间复杂度O(n)
 * 空间复杂度O(1)
 */


// Test
const loopList = createLoopList(createList([3, 2, 0, -4]), 1);
console.log(hasCycle(loopList)); // true