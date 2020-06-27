/**
 * 和为s的连续正数序列
 * https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/
 * 给定一个target，输出说有和为target的连续正整数序列
 */

const findContinuousSequence = (target) => {
  let left = 1;
  let right = 1;
  let sum = 0;
  let res = [];
  while (left <= Math.round(target / 2)) {
    if (sum === target) {
      let temp = [];
      for (let i = left; i < right; i++) {
        temp.push(i);
      }
      res.push(temp);
      sum -= left;
      left ++;
    } else if (sum > target) {
      sum -= left;
      left ++;
    } else {
      sum += right;
      right++;
    }
  }
  return res;
}

// Test
console.log(findContinuousSequence(9));

/**
 * 利用滑动窗口解决
 * left不能大于target的一半
 */