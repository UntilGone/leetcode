/**
 * 数组中重复的数字
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的
 * 但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */

const findRepeatNumber = (nums) => {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let save = set.size;
    set.add(nums[i]);
    if (set.size === save) {
      return nums[i]
    }
  }
}

// Test
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3])); // 2

/**
 * 常规操作 上来就暴力遍历
 * 时间复杂度o(n^2)
 * 然后看了解题 才想到 完全可以用set
 * 如果插入了一个值 set的长度没有变化
 * 说明这个是重复的
 * 这样的话时间复杂度就是O(n)
 * 同理  也可用对象存储键对值
 * obj[nums[i]] 存在则返回nums[i]
 */

const findRepeatNumberWithObj = (nums) => {
  const map = {};
  for (const num of nums) {
    if (map[num]) {
      return num;
    } else {
      map[num] = true;
    }
  }
}