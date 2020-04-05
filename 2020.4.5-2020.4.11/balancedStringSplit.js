/**
 * Split a String in Balanced Strings
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * 给一个含有L和R的字符串 把它分成每一段RL数量一样的字符串 返回字符串的个数
 * @param {string} s
 */
const balancedStringSplit = (s) => {
  let count = 0;
  let flag = {
    'R': 0,
    'L': 0,
  };
  for (let i = 0; i < s.length; i++) {
    flag[s[i]] ++;
    if (flag.R === flag.L) {
      count ++;
      flag = {
        'R': 0,
        'L': 0,
      };
    }
  }
  return count;
}

/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * 基于上面的代码 简化了一下
 */

const balancedStringSplit = (s) => {
  let count = 0;
  let flag = 0;
  for (let i = 0; i < s.length; i++) {
    flag += s[i] === 'L' ? 1 : -1;
    if (flag === 0) {
      count ++;
    }
  }
  return count;
}