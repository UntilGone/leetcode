/**
 * 二进制中1的个数
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * 实现一个函数，输入一个整数，输出该数二进制表示中1的个数
 */

const hammingWeight = (n) => {
  const str = n.toString(2).match(/1/g);
  return str ? str.length : 0;
}

// Test
console.log(hammingWeight(11)); // 3    11 -> 1011  3
console.log(hammingWeight(2)); // 1   2 -> 10 1

/**
 * 取巧 转字符串 正则匹配 然后返回长度
 * 实际的做法应该是位运算
 * & 也就是 位运算   0001 & 0010 = 0000   0101 & 0100 = 0100
 * 当n&(n-1)时   1111 & 1110 = 1110    1110 & 1101 = 1100
 * 可以发现每一次都会消除一次1
 * 只需要记录执行了几次就可以
 * 实现如下
 */

const hammingWeight = (n) => {
  let res = 0;
  while(n) {
    n = n&(n-1);
    res++;
  }
  return res;
}