/**
 * 翻转单词顺序
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 */

const reverseWords = (s) => {
  let arr = s.trim().split(' ');
  arr = arr.filter((val) => val !== '');
  return arr.reverse().join(' ');
}

// Test
console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("a good   example"));  // "example good a"