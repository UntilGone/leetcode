/**
 * Find N Unique Integers Sum up to Zero
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 * 返回一个长度为n每项不同的数组，数组的和为0
 * @param {number} n 
 * @returns {number[]}
 */
const sumZero = (n) => {
  if (n === 1) {
    return [0];
  } else {
    const rs = [];
    let i = 1;
    rs.push(i);
    for (let j = 1; j < n; j++) {
      if (j % 2 === 0 && j === n - 1) {
        rs.push(0);
      } else {
        if (j % 2 === 1) {
          i *= -1;
          rs.push(i);
        } else {
          i = i * -1 + 1;
          rs.push(i)
        }
      }
    }
    return rs;
  }
}

// Test
console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));