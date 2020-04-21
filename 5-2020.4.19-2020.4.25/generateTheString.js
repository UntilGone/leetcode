/**
 * Generate a String With Characters That Have Odd Counts
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 * 给定一个n,返回一个长度为n的字符串，这个字符串中每个数字出现的次数为奇数
 * @param {*} n 
 */
const generateTheString = (n) => {
  let str = '';
  if (n % 2 === 0) {
    for (let i = 0; i < n - 1; i++) {
      str += 'a';
    }
    str += 'b';
  } else {
    for (let i = 0; i < n; i ++) {
      str += 'a';
    }
  }
  return str;
}

// Test
console.log(generateTheString(5)); // 这个可能性太多了

/**
 * 不知道这个题的考点是啥
 * 感觉毫无意义。。
 * 提交最快的跟我的几乎一毛一样 就是把a循环提成了一个方法
 * ？？？
 */