// 题目
/**
 * 输出一个由0,1组成的数组代表停车场
 * 1表示有车，0标识没有车
 * 1 - 小车 11-货车 111-卡车
 * 输出停车场内最少有几辆车
 */
// [1,0,1] => 2辆小车 输出2
// [1,1,1,0,1,1,0,1] => 一辆卡车 一辆货车 一辆小车  输出3

process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (data) {
  // 处理数据
  const str = data.replace(/,/g, '');
  console.log(countMinNumOfCars(str));
});

function countMinNumOfCars(str) {
  if (!str) {
    return 0;
  }
  let res = 0;
  let temp = str; // 保存变量
  while (temp) {
    if (temp.indexOf('111') > -1) {
      // 存在卡车
      res++;
      temp = temp.replace('111');
    } else if (temp.indexOf('11') > -1) {
      // 存在货车
      res++;
      temp = temp.replace('11');
    } else if (temp.indexOf('1') > -1) {
      // 存在小车
      res++;
      temp = temp.replace('1');
    } else {
      // 没有车了；
      return res;
    }
  }
  return 0;
}
