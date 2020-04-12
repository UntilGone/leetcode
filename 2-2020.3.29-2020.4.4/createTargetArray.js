/**
 * Create Target Array in the Given Order
 * https://leetcode.com/problems/create-target-array-in-the-given-order/
 * 生成一个数组，往第index[i]插入nums[i],需要保证每次的插入操作有效
 * @param {number[]} nums
 * @param {number[]} index
 */
const createTargetArray = (nums, index) => {
  let rs = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const idx = index[i];
    if (val === undefined || idx === undefined) {
      continue;
    }
    rs = [...rs.slice(0, idx), val, ...rs.slice(idx)];
  }
  return rs;
}
// 时间复杂度 O(n)
// 空间复杂度 O(n)