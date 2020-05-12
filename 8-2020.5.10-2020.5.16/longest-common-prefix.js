/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }
  strs.sort((a, b) => a.length - b.length);
  let str = '';
  let idx = 1;
  while (strs[0].indexOf(str) > -1) {
    str = strs[0].slice(0, idx++);
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].indexOf(str) !== 0) {
        return str.slice(0, str.length - 1);
      }
    }
    if (idx > strs[0].length) {
      return str;
    }
  }
  return str.slice(0, str.length - 1);
};
// @lc code=end

