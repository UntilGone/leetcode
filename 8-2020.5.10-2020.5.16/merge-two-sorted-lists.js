/**
 * 合并2个升序的链表
 */
function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

const createList = (arr) => {
  const val = arr.shift();
  if (val === undefined) {
    return null;
  }
  return new ListNode(val, createList(arr));
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
}

// Test
const l1 = createList([1,2,4]);
const l2 = createList([1,3,4]);

console.log(mergeTwoLists(l1, l2));