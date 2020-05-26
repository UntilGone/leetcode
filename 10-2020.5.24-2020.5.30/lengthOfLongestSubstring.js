/**
 * 最长无重复字符字符串
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

// const lengthOfLongestSubstring = (s) => {
//   const arr = [];
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     let idx = arr.indexOf(s[i]);
//     if (idx !== -1) {
//       arr.splice(0, idx + 1)
//     }
//     arr.push(s[i]);
//     max = Math.max(arr.length, max);
//   }
//   // 上面的代码也可以转换为通过维护index实现
//   // 就避免了对数组的操作
//   // let idx = 0;
//   // let max = 0;
//   // for (let i = 0, j = 0; j < s.length; j++) {
//   //   idx = s.substr(i, j).indexOf(s[j]);
//   //   if (idx > -1) {
//   //     i = i + idx + 1;
//   //   }
//   //   max = Math.max(max, j - i + 1);
//   // }
//   return max;
// }

/**
 * 滑动窗口
 * 将嵌套循环转换为单循环
 * 遍历字符串
 * 如果不存在则存入滑动窗口
 * 如果存在则移除该字母及之前的内容
 * 最后拿到max
 * 时间复杂度O(n * (n + n)) = O(n) 循环O(n) indexOf O(n) splice O(n)
 * 空间复杂度O(n)
 */


const lengthOfLongestSubstring = (s) => {
  const map = new Map();
  let max = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
}

/**
 * 根据上面滑动窗口维护下标的逻辑
 * 通过map实现时间复杂度为O(n)的方法
 * 遍历字符串 其中i为滑动窗口的起始位置 j为遍历index
 * 如果存在  则拿到对应的index 计算当前不重复的最大长度
 * 如果不存在 则存入map
 * 因为map的set get方法时间复杂度为O(1) 所以整体时间复杂度为O(n)
 */

// Test
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('vvvv')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('aab')); // 2
console.log(lengthOfLongestSubstring('dvdf')); // 3