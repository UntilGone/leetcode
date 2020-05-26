/**
 * 翻转字符串里的单词
 * https://leetcode.com/problems/reverse-words-in-a-string/
 */

const reverseWords = (s) => {
  const rs = [];
  s.split(' ').forEach((val) => {
    val !== '' && rs.unshift(val);
  });
  return rs.join(' ');
}

// Test
console.log(reverseWords("the sky is blue")); // blue is sky the