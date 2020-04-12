/**
 * Cells with Odd Values in a Matrix
 * https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/
 * 给定一个m * n的矩阵（初始值为0）和一个矩阵indices，对于每一个indices[i] = [ri, ci]
 * 把初始矩阵的第 ri 行和第 ci列的值都加1
 * 返回这个矩阵中奇数的个数
 * @param {*} n 
 * @param {*} m 
 * @param {*} indices 
 * @returns {number}
 */
const oddCells = (n, m, indices) => {
  // init matrix
  const matrix = [];
  for (let i = 0; i < n; i++) {
    const temp = new Array(m).fill(0);
    matrix.push(temp);
  }
  for(let i = 0; i < indices.length; i++) {
    const [row, col] = indices[i];
    // calculate row
    for (let j = 0; j < m; j++) {
      matrix[row][j] += 1;
    }
    // calculate column
    for (let j = 0; j < n; j++) {
      matrix[j][col] += 1;
    }
  }
  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] % 2 !== 0) {
        count++;
      }
    }
  }
  return count;
}

// Test
console.log(oddCells(2, 3, [[0,1],[1,1]])); // 6
console.log(oddCells(2, 2, [[1,1],[0,0]])); // 0

/**
 * 一开始想用const matrix = new Array(n).fill(new Array(m).fill(0));
 * 这种方式初始化 但是忽略了一个问题 每一行都是用的同一个数组的引用 导致每次加都会让每一行的对应i增加
 * 以后要注意
 * 时间复杂度O(n^2) 空间复杂度O(n)
 * 然后看了个耗时比较少的 时间复杂度为O(n^2)
 * 因为最后需要判断奇数的个数 避免不了O(n^2) 但是前置操作是O(n)  我的前置工作是O(n^2)
 * 也就是 2 * O(n^2) > O(n^2) + O(n)?
 * 不废话 上代码
 */

const oddCellsOptimize = function(n, m, indices) {
  const row = new Array(n).fill(0);
  const col = new Array(m).fill(0);
  // 这就很灵性了 把2维数组拆分成2个一维数组
  for(let i = 0;i<indices.length;i++){
    row[indices[i][0]]++;
    col[indices[i][1]]++;
  }
  let count = 0;
  for(let i= 0 ;i<n;i++){
    for(let j = 0;j<m;j++){
      // 这里需要把2个值相加 因为是同一个位置 但是分开计算了行和列
      if((row[i]+col[j]) % 2 !==0){
        count ++;
      }
    }
  }
  return count;
};

// Test
console.log(oddCellsOptimize(2, 3, [[0,1],[1,1]])); // 6
console.log(oddCellsOptimize(2, 2, [[1,1],[0,0]])); // 0