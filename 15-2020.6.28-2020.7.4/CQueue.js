/**
 * 用两个栈实现队列
 * https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 * 用两个栈实现一个队列，appendTail用于在尾部插入值，deleteHead用于在头部删除值
 */

var CQueue = function() {
  this.stack = [];
  this.helper = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  while (this.stack.length > 1) {
    this.helper.push(this.stack.pop());
  }
  const res = this.stack.pop() || -1;
  while (this.helper.length > 0) {
    this.stack.push(this.helper.pop());
  }
  return res;
};

// Test
const obj = new CQueue();
obj.appendTail(3);
console.log(obj.deleteHead()); // 3
console.log(obj.deleteHead());; // -1
console.log(obj.deleteHead());; // -1


/**
 * 这个主要是考堆栈的数据结构
 * 队列是先进先出，只能在头移除尾插入
 * 栈则是先进后出
 * 所以需要一个栈用来保存pop的内容
 */