/**
 * Decrypt String from Alphabet to Integer Mapping
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * 给一个由0 - 9和#组成的字符串，其中a -i用 1-9表示 j-z用10#到26#表示
 * 返回解析以后的字符串
 * @param {string} s
 * @returns {string}
 */
const freqAlphabets = (s) => {
  let res = '';
  const arr = s.split('#');
  arr.forEach((str, key) => {
    let temp = str.split('');
    const len = temp.length;
    if (key === arr.length - 1 && str !== '#') {
      for (let i = 0; i < len; i++) {
        res += String.fromCharCode(parseInt(temp[i])+  96);
      }
    } else {
      for (let i = 0; i < len; i++) {
        if ((i === len - 2) && parseInt(temp[i]) <= 2) {
          res += String.fromCharCode(parseInt(`${temp[i]}${temp[i + 1]}`) + 96);  // 97 is a in ascii
          break;
        } else {
          res += String.fromCharCode(parseInt(temp[i]) + 96);
        }
      }
    }
  })
  return res;
}

// Test
console.log(freqAlphabets('10#11#12')); // jkab


/**
 * 根据#来分组字符串
 * 然后解析就完事了
 * 最近一段时间有点忙 只能先把题做出来了
 */