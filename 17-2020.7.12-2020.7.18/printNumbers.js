/**
 * 打印从1到最大的n位数
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 */

const printNumbers = (n) => {
  let str = '';
  let arr = [];
  for (let i = 0; i < n; i++) {
    str += '1';
  }
  const max = Number(str) * 9;
  for (let i = 1; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}


// Test
console.log(printNumbers(1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]