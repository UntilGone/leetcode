/**
 * Minimum Time Visiting All Points
 * https://leetcode.com/problems/minimum-time-visiting-all-points/
 * 给几个坐标点，计算从第一个到最后需要移动多少次（每次只能走临近的点）
 * @param {number[][]} points 
 */
const minTimeToVisitAllPoints = (points) => {
  let res = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    while (a[0] !== b[0] || a[1] !== b[1]) {
      if (a[0] < b[0]) {
        a[0] += 1;
      } else if (a[0] > b[0]) {
        a[0] -= 1;
      }
      if (a[1] < b[1]) {
        a[1] += 1;
      } else if (a[1] > b[1]) {
        a[1] -= 1;
      }
      res ++;
    }
  }
  return res;
}

console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]))

/**
 * 这个写法就是模拟走过的路径
 * 时间复杂度 空间复杂度都比较高
 * 所以试着优化一下
 * 这样时间复杂度就是O(n)了
 */

const minTimeToVisitAllPointsOptimize = (points) => {
  let res = 0;
  for (let i = 0; i < points.length - 1; i++) {
    const x = Math.abs(points[i][0] - points[i + 1][0]);
    const y = Math.abs(points[i][1] - points[i + 1][1]);
    res += (x > y ? x : y)
  }
  return res;
}
console.log(minTimeToVisitAllPointsOptimize([[1,1],[3,4],[-1,0]]))