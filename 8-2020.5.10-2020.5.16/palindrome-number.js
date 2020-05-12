/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = String(x);
  const len = str.length % 2 === 0 ? str.length / 2 : (str.length / 2 + 1);
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// @lc code=end

