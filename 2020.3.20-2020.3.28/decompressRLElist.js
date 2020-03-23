/**
 * Decompress Run-Length Encoded List
 * https://leetcode.com/problems/decompress-run-length-encoded-list/
 * 给定一个数组[a1,a2,b1,b2,...,n1,n2] 返回一个[a1个a2,b1个b2,...,n1个n2]
 * @param {number[]} nums
 */
const decompressRLElist = (nums) => {
  let res = [];
  const len = nums.length;
  for (let i = 0; i < len; i = i + 2) {
    const count = nums[i];
    const num = nums[i + 1];
    for (let j = 0; j < count; j++) {
      res.push(num);
    }
  }
  return res;
}

/**
 * 总结
 * 遍历一遍数组，然后生成一个新的数组
 */