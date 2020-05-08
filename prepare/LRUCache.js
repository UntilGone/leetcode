/**
 * LRU Cache
 * https://leetcode.com/problems/lru-cache/
 * 设计实现一个LRU（最近最少使用）缓存机制。
 * 它需要支持get、put
 * get： 获取value，如果不存在返回-1
 * put： 如果value不存在，则写入输入。当缓存达到上限是，他应该替换之前最久未使用的value
 * 进阶： O（1）时间复杂度内完成这2个操作
 */

const LRUCache = function(capacity) {
  
};
LRUCache.prototype.get = function(key) {

}

LRUCache.prototype.put = function(key, value) {

}


// Test
const cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4