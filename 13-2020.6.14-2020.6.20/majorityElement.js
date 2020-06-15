/**
 * 数组中出现次数超过一半的数字
 * https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 */

const majorityElement = (nums) => {
  const obj = {};
  const len = Math.floor(nums.length / 2);
  let max = nums[0];
  for (const num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
    if (obj[num] >= len) {
      max = obj[num] > obj[max] ? num : max;
    }
  }
  return max;
}

// Test
// console.log(majorityElement([1,2,3,2,2,2,5,4,2]));  // 2
// console.log(majorityElement([1,2,3,2,2,2,5,4,2])); // 2
console.log(majorityElement([1,2,3,2,2,2,5,4,2])); // 2

/**
 * 遍历一遍
 * 时间复杂度O(n)
 */