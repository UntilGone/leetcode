/**
 * 替换空格
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * @param {*} s 
 */
const replaceSpace = (s) => {
  return s.replace(/\s/g, '%20');
}

// Test
console.log(replaceSpace('I am hero')); // I&am%hero

/**
 * 这个也太没意思了
 * 正则就完事了
 * 遍历也能行
 */