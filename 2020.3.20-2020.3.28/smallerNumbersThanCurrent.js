/**
 * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * 给一个数字数组nums，返回一个该数组中小于nums[i]的数的个数的数组。
 */

 const smallerNumbersThanCurrent = (nums) => {
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      if (j !== i && nums[j] < nums[i]) {
        count ++;
      }
    }
    res.push(count);
  }
  return res;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

/**
 * 总结
 * 我的写法是通过两次遍历找到num[j] < num[i]的个数
 * 应该是平时不太注意算法，只想怎么实现功能，思考比较少
 * 只能多看看别人的提交，多学习一下了
 */

// 这里是一个耗时比较短的实现
// sort方法是归并排序
// 然后根据排序的index就能知道有几个比自己小的数了。
const smallerNumbersThanCurrent1 = (nums) => {
  const arr = [...nums];
  arr.sort((a, b) => a - b);
  const res = [];
  for (let num of nums) {
    res.push(arr.indexOf(num));
  }
  return res;
}