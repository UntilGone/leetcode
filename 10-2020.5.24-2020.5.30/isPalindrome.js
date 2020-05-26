/**
 * 判断字符串是否回文字符串
 */

const isPalindrome = (s) => {
  return s === s.split('').reverse().join('');
}
/**
 * 使用api翻转后一样就是回文字符串
 */



const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
/**
 * 前后2个指针
 * 遍历字符是否一样
 */

// Test
console.log(isPalindrome('12321'))