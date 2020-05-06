/**
 * Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 * 给2个有序数组nums1 nums2，长度分别为n m
 * 返回合并后的有序数组
 * 直接修改nums1
 * @param {*} nums1 
 * @param {*} n 
 * @param {*} nums2 
 * @param {*} m 
 */
const merge = (nums1, n, nums2, m) => {
  const rs = [];
  let j = 0;
  for (let i = 0; i < n; i++) {
    for (; j < m; j++) {
      if (nums1[i] < nums2[j]) {
        rs.push(nums1[i]);
        break;
      } else {
        rs.push(nums2[j]);
        continue;
      }
    }
  }
  while (j < m) {
    rs.push(nums2[j++]);
  }
  return rs;
}

// Test
console.log(merge([1, 2, 3, 0, 0 ,0], 3, [2, 5, 6], 3));

/**
 * 上面实现了需要的功能 时间复杂度为O(n*m)
 * 但是 这个题目要求直接修改nums1 也就是吧nums2合并进去
 * 这就有点东西了
 */

const merge2 = (nums1, n, nums2, m) => {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;
  while(len2 >= 0) {
    if (len1 < 0) {
      nums1[len--] = nums2[len2--];
      continue;
    }
    nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--] : nums2[len2--];
  }
  return nums1;
}

// Test
console.log(merge2([1, 2, 3, 0, 0 ,0], 3, [2, 5, 6], 3));

/**
 * 这个是抄别人的
 * 核心思路就是反着插入
 * 因为正着插入要么需要记录被修改的值 要么就需要整体后移 效率太低
 * nums1 nums2都是升序  那么只要反着插入就没有问题了
 */

