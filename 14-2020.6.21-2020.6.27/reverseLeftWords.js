/**
 * 左旋转字符串
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 */

const reverseLeftWords = function(s, n) {
  return s.substr(n) + s.substr(0, n);
};