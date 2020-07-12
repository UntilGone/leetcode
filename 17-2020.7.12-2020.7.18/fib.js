/**
 * 斐波那契数列
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * 结果要求取余 1000000007
 */

const fib = (n) => {
  if (n < 2) {
    return n;
  }
  return (fib(n - 1) + fib(n - 2)) % 1000000007;
}

// Test
// console.log(fib(2));  // 1
// console.log(fib(5));  // 5
// console.log(fib(44));  // 5


/**
 * 最基本的递归使用，会超时
 * 所以需要使用动态规划
 * f(n) = f(n - 1) + f(n - 2)
 * 所以就是r[i] = r[i - 1] + r[i - 2]
 * 循环i次 每次计算上面的值并替换对应的变量
 */

const fib2 = (n) => {
  let res = 0;
  let a = 1;
  for (let i = 0; i < n; i++) {
    let b = res;
    res = a;
    a = (res + b) % 1000000007;
  }
  return res;
}

// Test
console.log(fib2(2));  // 1
console.log(fib2(5));  // 5
console.log(fib2(44));  // 5
