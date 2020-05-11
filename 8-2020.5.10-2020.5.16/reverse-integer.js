/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const negative = x < 0 ? -1 : 1;
  const num = new Number(String(Math.abs(x)).split('').reverse().join(''));
  return num >= 2147483648 ? 0 : num * negative;
};
// @lc code=end

