/**
 * 台阶问题
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 * 一次可以走1个或者2个台阶，求上n个台阶有多少种走法
 * 答案要求取模1000000007
 */

const numWays = (n) => {
  let pre = 1;
  let next = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = (pre + next) % 1000000007;
    pre = next;
    next = sum;
  }
  return pre;
}

// Test
console.log(numWays(2));  // 2
console.log(numWays(7));  // 21

/**
 * 这个问题可以化为斐波那契数列
 * 因为f(n) = 1 f(2) = 2 f(3) = f(1) + f(2)
 * 与斐波那契数列不同的只是起始值
 */