/**
 * Replace Elements with Greatest Element on Right Side
 * https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 * 给定一个数组，对于任意arr[i]替换为它右边数组中最大的一个
 * @param {number[]} arr 
 * @return {number[]}
 */
const replaceElements = (arr) => {
  const temp = [...arr];
  for (let i = 0; i < temp.length - 1; i++) {
    let max;
    for (let j = i + 1; j < arr.length; j++) {
      max = (max > arr[j] ? max : arr[j]);
    }
    temp[i] = max;
  }
  temp[temp.length - 1] = -1;
  return temp;
}

// console.log(replaceElements([17,18,5,4,6,1]));

/**
 * 找到i后面最大的数赋值给i
 * 时间复杂度O(n^2)
 * 可以优化一下
 * 根本上来讲应该都是O(n^2)
 */

const replaceElementsOptimize = (arr) => {
  // 纯函数 不修改arr
  const temp = [...arr];
  for (let i = 0; i < temp.length - 1; i++) {
    // 标记右边最大值的index
    let maxIndex = i + 1;
    for (let j = i + 2; j < arr.length; j++) {
      maxIndex = (arr[maxIndex] > arr[j] ? maxIndex : j);
    }
    // 减少遍历次数
    for (let j = i; j < maxIndex; j++) {
      temp[j] = arr[maxIndex];
    }
    i = maxIndex - 1;
  }
  temp[temp.length - 1] = -1;
  return temp;
}

console.log(replaceElementsOptimize([17,18,5,4,6,1]));

/**
 * 看了最快速度的提交
 * 反过来会更好一点，减少了遍历的次数，时间复杂度就是O(n)
 */
const replaceElementsOptimize2 = (arr) => {
  const temp = [...arr];
  let max = -1; // 最后一个值是-1
  for (let i = temp.length - 1; i >= 0; i--) {
    const tempVal = arr[i];
    temp[i] = max;
    if (tempVal > max) {
      max = tempVal;
    }
  }
  return temp;
}