/**
 * 二维数组中的查找
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * 从matrix中查找target是否存在
 * matrix从左向右递增 从上到下递增
 */

const findNumberIn2DArray = (matrix, target) => {
  const xLen = matrix.length;
  const yLen = xLen > 0 ? matrix[0].length : 0;
  let y = yLen - 1;
  let x = 0;
  while (x < xLen && y >= 0) {
    const num = matrix[x][y];
    if (num === target) {
      return true;
    } else if (num > target) {
      y--;
    } else {
      x++;
    }
  }
  return false;
}

const testData = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
// Test
console.log(findNumberIn2DArray(testData, 5));  // true
console.log(findNumberIn2DArray(testData, 20));  // false

/**
 * 第一种，就是暴力循环，时间复杂度O(n*m)
 * 第二种，一开始想的因为是有序的，就用二分查找
 * 看到了别人下标法，简单易懂
 * 取每一行最大的 大于target就在这一行往前找 小于就去下一行找
 */