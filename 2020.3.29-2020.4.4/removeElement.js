/**
 * Remove Element
 * https://leetcode.com/problems/remove-element/
 * 给一个数组和一个值 移除掉数组里的这个值 同时返回数组的长度
 */
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
    }
  }
  return nums.length;
}

/**
 * 这个题就很傻叼，要求改变nums，就是说不能写纯函数
 * 因为它最后的判断是用方法返回的len去遍历nums，如果遍历不完或者超出了就error
 * 所以这里只有用splice直接去修改原数组
 * 可能只要是考形参实参的应用？
 * 但是一般业务尤其是写React的话，都是要求写纯函数的，污染小，代码也好管理
 */