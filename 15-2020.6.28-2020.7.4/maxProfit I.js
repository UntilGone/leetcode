/**
 * 买卖股票的最佳时机
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 给定一个数组，其中第i个元素是给定股票第i天的价格
 * 只能交易一次（买入、卖出），计算能获取最大的利润
 */


const maxProfit = (prices) => {
  let min = 0;
  let earnings = 0;
  for (let i = 0; i < prices.length; i++) {
    earnings = Math.max(prices[i] - prices[min], earnings);
    if (prices[min] > prices[i]) {
      min = i;
    }
  }
  return earnings;
}

// Test
console.log(maxProfit([7, 1, 5, 3, 6, 4]));   // 5
console.log(maxProfit([7, 6, 4, 3, 1]));   // 0

/**
 * 很久之前就看到了，但是没做
 * 昨天面试的时候被问到了
 * 感觉当场想问题很容易着急，就老乱想
 * 其实道理明明很简单
 * 找到i天前最小的min，就能获取当天的收益，遍历一次就能找到收益最高的值
 * 时间复杂度O(n)
 * 也就是贪婪算法： 在每一步中采取当前状态下最好或最优的选择
 */