/**
 * 和为s的两个数字
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 */

const twoSum = (nums, target) => {
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [nums[i], nums[j]];
  //     }
  //   }
  // }
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum > target) {
      right --;
    } else {
      left ++;
    }
  }
  return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7]

/**
 * 本来是用2个for循环暴力找
 * 时间复杂度就是o(n^2)
 * 结果test 里有个10000长度的数组 超时了
 * 改为双指针，easy
 */