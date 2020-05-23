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

const showListVal = (list) => {
  const arr = [];
  while(list) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}


/**
 * 创建两条相交的链表
 * @param {number[]} arrA
 * @param {number[]} arrB
 * @param {number} intersect
 * @return {NodeList[2]}
 */
createIntersectionList = (arrA, arrB, intersect) => {
  const idxA = arrA.findIndex(val => val === intersect);
  const idxB = arrB.findIndex(val => val === intersect);
  const common = arrA.splice(idxA);
  const listCommon = createList(common);
  const listA = createList(arrA.slice(0, idxA));
  let index = listA;
  while(index.next) {
    index = index.next;
  }
  index.next = listCommon;
  const listB = createList(arrB.slice(0, idxB));
  index = listB;
  while(index.next) {
    index = index.next;
  }
  index.next = listCommon;
  return [listA, listB];
}

module.exports = {
  ListNode,
  createList,
  createLoopList,
  showListVal,
  createIntersectionList,
}