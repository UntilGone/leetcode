/**
 * 这个是从掘金上看的
 * 设计一个支持push pop top操作，并能在常数时间内检索到最小元素的栈
 */
const MinStack = function() {
  this.stack = [];
  this.min = [];  // 保存当前最小值 保证能O(1)时间复杂度拿到栈最小值
}
MinStack.prototype.push = function(val) {
  if (this.min.length === 0) {
    this.min.push(val);
  } else {
    const min = this.min[this.min.length - 1];
    this.min.push(val > min ? min : val);
  }
  this.stack.push(val);
}
MinStack.prototype.pop = function() {
  this.min.pop();
  return this.stack.pop();
}
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
}
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
}

// Test
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2