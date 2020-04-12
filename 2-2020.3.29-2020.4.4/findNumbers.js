/**
 *  Find Numbers with Even Number of Digits
 * 给一个数组，返回这个数组里位数是偶尔的数量
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
}

/**
 * 也是个傻瓜题
 * 我的写法也是傻瓜的不行
 * 下面这个是简化版 直接用filter就完事了
 */

 const findNUmbersOptimize = (nums) => nums.filter((val => val.toString().length % 2 === 2)).length;