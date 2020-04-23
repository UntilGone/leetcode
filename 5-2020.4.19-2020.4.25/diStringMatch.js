/**
 * DI String Match
 * https://leetcode.com/problems/di-string-match/
 * 给一个值含有I 和 D的字符串s
 * 返回一个数组A 如果 s[i] == 'I' 那么A[i]<A[i+1]  D则相反
 * @param {string} s 
 * @returns {number[]}
 */
const diStringMatch = (s) => {
  const rs = [];
  let left = 0;
  let right = s.length;
  for (let i = 0; i <= s.length; i++) {
    if (s.charAt(i) === 'I') {
      rs.push(left++);
    } else {
      rs.push(right--);
    }
  }
  return rs;
}

// Test
console.log(diStringMatch('IDID')); // [ 0, 4, 1, 3, 2 ]