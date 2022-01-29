// 题目
/**
 * 输入一个一维数组
 * 输出这个数组中众数的中位数
 */
// 1 2 3 1 1 3 3 => 众数是 1 3 => 众数的中位数是 (1 + 3) / 2 =2
// 11, 12, 11, 12, 13, 13 => 众数是11， 12， 13 => 中位数是12
// 牛客网需要处理输入输出
process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (data) {
  const str = data.replace(/\n/g, '');
  const arr = str.split(' ');
  console.log(func(arr));
});
function func(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  let max = 0;
  Object.keys(map).forEach((key) => {
    if (max < map[key]) {
      max = map[key];
    }
  });
  const temp = Object.keys(map).filter((key) => map[key] === max);
  const len = temp.length;
  if (len === 1) {
    return parseInt(temp[0]);
  } else if (temp.length % 2) {
    return parseInt(temp[Math.floor(temp.length / 2)]);
  } else {
    const middle = temp.length / 2;
    return (parseInt(temp[middle - 1]) + parseInt(temp[middle])) / 2;
  }
}
