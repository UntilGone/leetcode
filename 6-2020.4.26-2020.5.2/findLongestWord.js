/**
 * Longest Word in Dictionary through Deleting
 * https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/
 * 给定一个字符串s，和字典d，找出s中通过删除某些字字母可以形成的字典d里的字符串
 * 如果有多个结果，按长度、字典排序
 * @param {string} s 
 * @param {string[]} d 
 */
const findLongestWord = (s, d) => {
  let rs = '';
  for (let i = 0; i < d.length; i++) {
    if (d[i].length > s.length) {
      continue;
    }
    let k = 0;
    let j = 0;
    const len = d[i].length;
    for (; j < s.length; j++) {
      if (s[j] === d[i][k]) {
        k++;
        if (k === len) {
          if (d[i].length > rs.length || (d[i].length === rs.length && d[i] < rs)) {
            rs = d[i];
          }
          break;
        }
      }
    }
  }
  return rs;
}

// Test
console.log(findLongestWord('abpcplea', ["ale","apple","monkey","plea"]));  // 'apple'
console.log(findLongestWord('abpcplea', ["a","b","c"]));  // 'a'

/**
 * 本来是想通过正则来写的  给出的样例是通过的 但是有个超长的给超时了
 * 重新有for循环解决
 * 其实就是要求顺序固定 所以用for循环也能解决
 */
const findLongestWordByReg = (s, d) => {
  let rs = '';
  for (let i = 0; i < d.length; i++) {
    if (d[i].length > s.length) {
      continue;
    }
    let str = '';
    d[i].split('').forEach((val) => {
      str += val + '[a-z]*';
    });
    const reg = new RegExp(str);
    if (reg.test(s)) {
      if (d[i].length > rs.length || (d[i].length === rs.length && d[i] < rs)) {
        rs = d[i];
      }
    }
  }
  return rs;
}