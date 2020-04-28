/**
 * Find Pivot Index
 * https://leetcode.com/problems/find-pivot-index/
 * 给定一个数组，返回左边和右边数和相等的数的索引
 * @param {*} nums 
 */
const pivotIndex = (nums) => {
  let sum = 0;
  nums.forEach(val => {
    sum += val;
  });
  let left = 0;
  for(let i = 0; i < nums.length; i++) {
    if (left * 2 + nums[i] === sum) {
      return i;
    }
    left += nums[i];
  }
  return -1;
}

// Test
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));  // 3
console.log(pivotIndex([1, 2, 3]));  // -1

/**
 * 时间复杂度应该是O(n) + O(n) ≈ O(n)
 * 先求出整个数组的和 sum
 * 然后从头遍历数组，判断左边的和是不是等于 (sum - nums[i]) / 2
 * 是就返回i  不是就继续 遍历完则没有返回-1
 * 照例看一下速度比较快的提交
 * 用了reduce
 * 所以这里就学习一波reduce
 * Array.reduce(function (total, current, index, array), init);
 * total 累加的结果
 * current 当前的值
 * index 当前的索引
 * array 数组本身
 * init total的初始值
 * 需要注意的一点是，这个function的返回值将被赋值给下一次执行的total
 * 所以 我的代码可以改一下
 */

const pivotIndex = (nums) => {
  const sum = nums.reduce((total, current) => total + current, 0);
  let left = 0;
  for(let i = 0; i < nums.length; i++) {
    if (left * 2 + nums[i] === sum) {
      return i;
    }
    left += nums[i];
  }
  return -1;
}
// 经测试，速度快了一点，说明reduce的效率大概是比forEach快