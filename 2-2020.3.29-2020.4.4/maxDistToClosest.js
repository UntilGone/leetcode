/**
 * Maximize Distance to Closest Person
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 * 给定一个长度不小于2的数组，里面只有1、0。1代表这个位置有人坐，0则代表没有
 * 返回能坐的位置离的有人的位置的距离的最大值
 */
const maxDistToClosest = function(seats) {
  const len = seats.length;
  let max = 0;
  if (len === 2) {
    return 1;
  } else {
    // 遍历每一个位置
    for (let i = 0 ; i < len; i++) {
      // 如果是1则不能坐
      if (seats[i]) {
        continue;
      } else {
        let tempLeft = 0;
        let tempRight = 0;
        // 获取这个座位左边做近的有人的距离
        for (let j = i - 1; j >= 0; j--) {
          tempLeft ++;
          if (seats[j]) {
            break;
          }
        }
        // 获取这个位置右边最近的有人的距离
        for (let j = i + 1; j < len; j++) {
          tempRight ++;
          if (seats[j]) {
            break;
          }
        }
        let temp = 0;
        // 其中一个为0则取另外一个
        if (tempRight === 0 || tempLeft === 0) {
          temp = tempRight || tempLeft;
        } else {
          // 取2个位置相对小的
          temp = tempRight > tempLeft ? tempLeft : tempRight;
        }
        // 和标记位做比较
        if (temp > max) {
          max = temp;
        }
      }
    }
  }
  return max;
};

/**
 * 思路都写在注释里，不算复杂
 * 时间复杂度应该是O(n^2)
 * 看了个O(n)复杂度的
 */
const maxDistToClosest_On = function(seats) {
  if(seats.indexOf(0) === -1) return;
  let count = 0, maxLen = 0;
  for(let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) count = 0;
    if (seats[i] === 0) count++;
    if (count > maxLen) maxLen = count;
  }
  return Math.max(Math.ceil(maxLen / 2), seats.indexOf(1), seats.length - 1 - seats.lastIndexOf(1));
};