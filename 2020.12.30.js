/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * 给定一个数组
 * runningSum[i] = sum(nums[0],...,nums[i])
 * 返回runningSum
 */

 // forEach遍历
// const runningSum = (nums) => {
//   const res = [];
//   let sum = Infinity;
//   nums.forEach((item) => {
//     if (sum === Infinity) {
//       sum = item;
//     } else {
//       sum += item;
//     }
//     res.push(sum);
//   });
//   return res;
// }

// reduce
const runningSum = (nums) => {
  return nums.reduce((pre, cur) => {
    return [...pre, (pre[pre.length - 1] || 0) + cur]
  }, []);
}

// Test
console.log(runningSum([1,2,3,4])); // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]