/**
 * 第一个只出现一次的字符
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * 在字符串s中找到第一个只出现一次的字符，如果没有则返回空格
 */

const firstUniqChar = (s) => {
  const arr = [];
  for(let i = 0; i < s.length; i++) {
    let flag = true;
    if (arr.indexOf(s[i]) > -1) {
      continue;
    }
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        flag = false;
        arr.push(s[j]);
        break;
      }
    }
    if (flag) {
      return s[i]
    }
  }
  return ' ';
}

// Test
console.log(firstUniqChar('abaccdeff'));  // b