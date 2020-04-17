/**
 * Increasing Decreasing String
 * https://leetcode.com/problems/increasing-decreasing-string/
 * 把字符串从小到大再从大到小排序，返回这个字符串(只有小写字母)
 * @param {string} s 
 */

// 其实没必要 完全是为了重新学习一下快排的写法
// 通过递归的方式把左右两边的数组不停排序
// 然后发现 快排是不能有重复的 不然就死循环了。
const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const left = [];
  const right = [];
  let flag = arr[Math.floor(Math.random() * arr.length)];
  arr.forEach((val) => {
    if (val.charCodeAt() < flag.charCodeAt()) {
      left.push(val);
    } else {
      right.push(val);
    }
  });
  console.log(left, right);
  return [...quickSort(left), ...quickSort(right)];
}
const sortString = (s) => {
  let temp = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  let sortArr = [];
  for (let i = 0; i < temp.length; i ++) {
    let flag = temp[i++];
    const arr = [flag];
    while(flag === temp[i]) {
      arr.push(flag);
      i++;
    }
    i--;
    sortArr.push(arr);
  }
  console.log(sortArr);
  const res = [];
  while (sortArr.length) {
    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i].length === 0) {
        sortArr.splice(i, 1);
        i--;
      } else {
        res.push(sortArr[i].pop());
      }
    }
    sortArr = sortArr.reverse();
  }
  return res.join('');
}

// Test
console.log(sortString('aaaabbbbcccc') === 'abccbaabccba');
console.log(sortString('rat') === 'art');

/**
 * 这周疯狂加班，先把题目做了  空一点再来补充想法
 */