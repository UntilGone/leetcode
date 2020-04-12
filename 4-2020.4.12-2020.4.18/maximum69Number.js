/**
 * Maximum 69 Number
 * https://leetcode.com/problems/maximum-69-number/
 * 给一个又6和9组成的正整数，返回一个只改变（6变成9 或者9变成6）1个数后最大的值
 * @param {number} num
 * @returns {number}
 */
const maximum69Number = (num) => {
  let tempNum = num.toString().split('');
  for(let i = 0; i < tempNum.length; i++) {
    if (tempNum[i] !== '9') {
      tempNum[i] = '9';
      return parseInt(tempNum.join(''));
    }
  }
  return num;
}

// Test
console.log(maximum69Number(9669));

/**
 * 比较傻瓜的一个题，简单粗暴的修改第一个不是9的数为9就好了
 * 过程中发现 如果是字符串的话 直接修改str[i] = 'xx'是没有作用的 以后要注意这一点
 * 但是提交以后发现速度贼慢 我拿了速度最快的代码对比 几乎是一样的 估计跟运行环境关系比较打
 * 这就体现了时间复杂度和空间复杂度的重要性=。=
 * 时间复杂度O(n) 空间复杂度O(1)
 */