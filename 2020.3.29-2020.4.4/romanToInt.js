/**
 * Roman to Integer
 * https://leetcode.com/problems/roman-to-integer/
 * 把罗马数字转成10进制数字
 * @param {string} s 罗马数字
 */
const romanToInt = (s) => {
  // 罗马数字对应的值
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  const arr = s.split('');
  let count = 0;  // 用于记录每一段数
  let pre = 0;  // 前一个数
  while (arr.length) {
    // 拿到当前的数值
    const symbol = arr.shift();
    const num = Number(map[symbol]);
    // 前一个数小于后一个数且count为0 也就是第一个数 count = num
    if (pre <= num && count === 0) {
      count += num;
    } else {
      // count 如果大于等于num 意味着这一段数结束了  例如 II = 1 + 1
      if (count >= num) {
        res += count;
        count = num;
      } else {
        // count 小于 num的话  意味着count是num的减数 所以count = num - count 例如 IV = 5 -1 = 4
        count = num - count;
      }
    }
    pre = num;
  }
  res += count;
  return res;
}

console.log('input: MCMXCIV');
console.log('output: ', romanToInt(MCMXCIV));
/**
 * 总结
 * 算是这这两天做的题里相对复杂一点的了。主要是前几个太简单了。。
 * 题目描述的感觉有点复杂，其实就是拆成几段然后累加
 * 比如：MCMXCIV 就是 M + CM + XC + IV 也就是 1000 + 900 + 90 + 4
 * 小的在大的前面就是 大的减小的  比如IV 就是 5 - 1 = 4
 * 大的在小的前面就是新的一个数 比如 VI 就是 5 + 1 = 6
 */

// 在记一个 看起来比较简洁的
const romanToIntSimple = function(s) {
  // create hashmap of roman symbols and value
  let map = new Map(), int = 0, i = 0;
  map.set('I',1);
  map.set('V',5);
  map.set('X',10);
  map.set('L',50);
  map.set('C',100);
  map.set('D',500);
  map.set('M',1000);
  // loop through s
  while(i < s.length){
      const currentValue = map.get(s[i]);
      // if current symbol value is less than next symbol value, subtract
      if(currentValue < map.get(s[i + 1])) {
        int -= currentValue;
      } else {
        int += currentValue;
      }
      i++;
  }
  return int;
};
/**
 * 这里可以看出来
 * 实际上如果当前这个小于后一个就在整体上减掉这个数，相反则加上
 * 这个逻辑就简单明了多了，
 * 相比之下我的逻辑可以说是脱了裤子放屁了
 */