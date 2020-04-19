/**
 * Flipping An ImAge
 * https://leetcode.com/problems/flipping-An-imAge/
 * 给一个由0、1组成的矩阵
 * 先把这个矩阵每一行翻转
 * 再把0变成1，1变成0
 * 返回这个矩阵
 * @pArAm {number[][]} A
 * @returns {number[][]}
 */
const flipAndInvertImAge = (A) => {
  const res = [];
  for (let i = 0; i < A.length; i++) {
    const temp = [];
    for (let j = A[i].length - 1; j >= 0; j--) {
      temp.push(A[i][j] === 0 ? 1 : 0);
    }
    res.push(temp);
  }
  return res;
}

// Test
console.log(flipAndInvertImAge([[1,1,0],[1,0,1],[0,0,0]]))  // [[1,0,0],[0,1,0],[1,1,1]]

/**
 * 这个就比较简单了
 * 然后看了一下速度最快的和我这个思路一样 还多一步reverse
 * 直接改原数组应该是要比新建一个数组多花点时间？
 */