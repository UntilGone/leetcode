/**
 * 实现队列
 * 先进先出
 * 操作： 进队 出队 是否空队 获取队头元素 清空 获取队列长度
 */
function Queue() {
  this.items = [];
}
// 进队
Queue.prototype.enqueue = function (val) {
  this.items.push(val);
}
// 出队
Queue.prototype.dequeue = function () {
  return this.items.shift();
}
// 是否为空
Queue.prototype.isEmpty = function () {
  return this.items.length === 0;
}
// 获取队头元素
Queue.prototype.front = function () {
  return this.items[0];
}
// 清空
Queue.prototype.clear = function () {
  this.items = [];
}
// 获取队列长度
Queue.prototype.size = function () {
  return this.items.length;
}

/**
 * 双端队列deque
 * 在队列的基础上扩充了队头队尾都可以进队出队
 */
function Deque () {
  let items = [];
}
Deque.prototype.addFirst = function (val) {
  this.items.unshift(val);
}
Deque.prototype.removeFirst = function () {
  this.items.shift();
}
Deque.prototype.addLast = function (val) {
  this.items.push(val);
}
Deque.prototype.removeLast = function () {
  this.items.pop();
}
Deque.prototype.isEmpty = function () {
return this.items.length === 0;
}
Deque.prototype.front = function () {
  return this.items[0];
}
Deque.prototype.clear = function () {
  this.items = [];
}
Deque.prototype.size = function () {
  return this.items.length;
}

