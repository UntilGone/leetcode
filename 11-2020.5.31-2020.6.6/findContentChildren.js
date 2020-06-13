/**
 * Assign Cookies
 * https://leetcode.com/problems/assign-cookies/
 * 简单来说就是有2个数组g, s找出s[j] >= g[i]能满足的最大个数
 * [1,2,3] [1, 1] => 1
 * [1,2] [1,2,3] => 2
 */

const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let G = g.length - 1;
  let S = s.length - 1;
  while (G > -1) {
    if (g[G] <= s[S]) {
      count ++;
      S--;
    }
    G--;
  }
  return count;
}

// Test
console.log(findContentChildren([1,2,3], [1,1])); // 1
console.log(findContentChildren([1,2], [1,2,3])); // 2

/**
 * 2个数组从小到大排序
 * 从后向前遍历
 * 如果满足了 g[G] <= s[S] count++ G-- S--
 * 否则只移动G
 */