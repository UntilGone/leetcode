/**
 * 判断字符串里的括号是否匹配
 * https://leetcode.com/problems/valid-parentheses/
 */

const isValid = (s) => {
  const arr = [];
  const left = ['(', '{', '['];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < s.length; i++) {
    if (left.indexOf(s[i]) > -1) {
      arr.push(s[i]);
    } else {
      if (map[arr.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return arr.length === 0;
};

/**
 * 这个就比较简单
 * 左边括号就push 右边括号判断和arr.pop的是否匹配
 * 是就继续遍历
 * 不是就return false
 * 简单的栈
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 */


// Test
console.log(isValid('{}')); // true
console.log(isValid('(({{}))')); // false