/**
 * Count Negative Numbers in a Sorted Matrix
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * 给一个m*n的矩阵grid，grid的每一行、列都是递减排序
 * 返回这个矩阵中负数的个数
 * @param {number[][]} grid 
 */
const countNegatives = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    let j = 0;
    for (; j < n; j++) {
      if (grid[i][j] < 0) {
        count ++;
      }
    }
  }
  return count;
}

// Test
console.log(countNegatives([[5,1,0],[-5,-5,-5]]));

/**
 * 先写一个暴力的，全部遍历一遍，简单直接
 * 但是，这个矩阵是递减的，也就是说只需要找到一个临界点 剩下的就都是负数了
 * 优化失败-，- 先做完这周题再接着研究一下
 */

 const countNegativesOptimize = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] < 0) {
        n = j
        break;
      }
    }
    count += grid.length - n;
  }
  return count;
 }

 // Test
console.log(countNegativesOptimize([[5,1,0],[-5,-5,-5]]));