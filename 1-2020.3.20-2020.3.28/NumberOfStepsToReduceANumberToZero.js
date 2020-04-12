/*
* https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
* 给定一个正整数，返回把它减少到0的步数。偶数除以二，奇数减一。
*/

/**
 * @param {number} num
 * @return {number}
 */
 const numberOfSteps = (num) => {
  let step = 0;
  let temp = num;
  while (temp) {
    temp = temp % 2 > 0 ? (temp - 1) : (temp / 2);
    step++;
  }
  return step;
 }
 console.log(numberOfSteps(15));  // 返回7  15 -> 14 -> 7 -> 6 -> 3 -> 2 -> 1 -> 0


 // 总结
 // 果然Easy的题确实比较简单
 // 我这里用了while去循环，其实完全可以用递归的形式
 // 如下，这样代码要简洁很多
 /**
 * @param {number} num
 * @param {number} count  用来记录Steps
 * @return {number}
 */
 const numberOfStepsByRecursive = (num, count = 0) => {
   if (num === 0) {
     return count;
   }
   return numberOfStepsByRecursive(num % 2 ? num - 1 : num / 2, count + 1);
 }
 console.log(numberOfStepsByRecursive(15));