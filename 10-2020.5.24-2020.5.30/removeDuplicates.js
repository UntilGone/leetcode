/**
 * 移除字符串里相邻的重复项
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */

// const removeDuplicates = (s) => {
//   for (let i = 1; i < s.length; i++) {
//     if (s[i - 1] === s[i]) {
//       s = s.substring(0, i - 1) + s.substr(i + 1);
//       return removeDuplicates(s);
//     }
//   }
//   return s;
// }

/**
 * 使用递归
 * 遇到2个相邻的就移除
 * 然后继续调用方法
 * 直到没有重复的
 */


const removeDuplicates = (s) => {
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    const temp = stack.pop();
    if (temp !== s[i]) {
      stack.push(temp);
      stack.push(s[i]);
    }
  }
  return stack.join('');
}

/**
 * 利用栈实现
 * 如果不同则则进栈
 */

// Test
console.log(removeDuplicates('abbaca'));  // ca