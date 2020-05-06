/**
 * Intersection of Two Arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 求两个数组的交集
 * @param {*} nums1 
 * @param {*} nums2 
 */
const intersection = (nums1, nums2) => Array.from(new Set(nums1.filter((num) => nums2.includes(num))));

// Test
console.log(intersection([1, 2, 2, 1], [2, 2]));  // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));  // [9, 4]

/**
 * 这个就很简单了
 * 通过filter过滤出交集
 * 通过set去重
 * 也可以通过for循环去写
 */