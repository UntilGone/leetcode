/**
 * Compare Strings by Frequency of the Smallest Character
 * https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
 * f(s) 表示一个返回s中最小字母出现频率次数的函数
 * 给定2个字符串数组 queries 和 words
 * 返回一个数组rs rs[i] = f(words[x]) > f(queries[i]) 的个数
 * @param {string[]} word1
 * @param {string[]} word2
 * @returns {number}
 */
const numSmallerByFrequency = (queries, words) => {
  const rs = [];
  const fun = (s) => {
    const arr = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    const min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== min) {
        return i;
      }
    }
    return arr.length;
  }
  const wordsTimes = [];
  words.forEach((val) => wordsTimes.push(fun(val)));
  console.log(wordsTimes);
  for (let i = 0; i < queries.length; i++) {
    const times = fun(queries[i]);
    let count = 0;
    for (let j = 0; j < wordsTimes.length; j++) {
      if (wordsTimes[j] > times) {
        count++;
      }
    }
    rs.push(count);
  }
  return rs;
}

// Test
console.log(numSmallerByFrequency(["cbd"], ["zaaaz"])); // [1]
console.log(numSmallerByFrequency(["bbb","cc"], ["a","aa","aaa","aaaa"])); // [1, 2]
console.log(numSmallerByFrequency(
  ["bba","abaaaaaa","aaaaaa","bbabbabaab","aba","aa","baab","bbbbbb","aab","bbabbaabb"],
  ["aaabbb","aab","babbab","babbbb","b","bbbbbbbbab","a","bbbbbbbbbb","baaabbaab","aa"]
)); // [ 6, 1, 1, 2, 3, 3, 3, 1, 3, 2 ]