/**
 * Subtract the Product and Sum of Digits of an Integer
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * 给定一个数ABC，返回A*B*C - （A+B+C）
 */

 const subtractProductAndSum = (n) => {
  const temp = (n + '').split('');
  const len = temp.length;
  let product = 1;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    let num = Number(temp[i]);
    product = product * num;
    sum += num;
  }
  return product - sum;
 }

 /**
  * 总结
  * 写法比较直接，遍历一遍获取累乘和累加的值，返回差值
  */