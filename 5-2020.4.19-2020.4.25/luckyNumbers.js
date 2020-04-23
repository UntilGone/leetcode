/**
 *  Lucky Numbers in a Matrix
 * https://leetcode.com/problems/lucky-numbers-in-a-matrix/
 * 给一个Mm*n的矩阵，矩阵中每个数字都不相同，返回这个矩阵中的幸运数字
 * 幸运数字就是一行中最小，一列中最大的
 * @param {*} matrix 
 */
const luckyNumbers = (matrix) => {
  const rs = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    let flag = 0;
    // 找到当前行最小的一个
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] <= min) {
        min = matrix[i][j];
        flag = j;
      }
    }
    let max = min;
    // 判断这个数是不是这一列最大的
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][flag] > max) {
        max = matrix[k][flag];
        break;
      }
    }
    if (max === min) {
      rs.push(max);
    }
  }
  return rs;
}

// Test
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));  // [15]
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]));  // [12]
console.log(luckyNumbers([[7,8],[1,2]]));  // [7]