// 题目
/**
 * 线人会给警察留下时间记号，通知警察犯罪时间，如18:53
 * 但是这个时间是加密过的
 * 解密方式： 这个时间可以拆分为1 8 5 3由这4个数字组成的最近的时间就是实际时间 也就是18:55
 * 输入 标准时间格式的时间如11:55 08:12
 * 输出 符合要求的标准时间
 */
// 18:53 => 18:55
// 23:59 => 22:22 // 时间是可以超过一天的

process.stdin.resume();
process.stdin.setEncoding('ascii');

process.stdin.on('data', function (time) {
  console.log(genrateTime(time.replace(/\n/g, '')));
});

function genrateTime(time) {
  const enterTime = time;
  const arr = time.replace(':', '').split('');
  const hourArr = [];
  const minArr = [];
  const temp = [];
  // 组合所有可能性
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      temp.push(arr[i] + arr[j]);
    }
  }
  // 筛选符合时间条件
  temp.forEach((val) => {
    if (val < '24') {
      hourArr.push(val);
      minArr.push(val);
    } else if (val < '60') {
      minArr.push(val);
    }
  });
  // 组合所有时间
  const timeArr = [];
  for (let i = 0; i < hourArr.length; i++) {
    for (let j = 0; j < minArr.length; j++) {
      if (`${hourArr[i]}:${minArr[j]}` !== time) {
        timeArr.push(`${hourArr[i]}:${minArr[j]}`);
      }
    }
  }
  let min = Number.MAX_SAFE_INTEGER;
  const map = {};
  timeArr.forEach((now) => {
    const timeCount = countTime(now, time);
    if (min > timeCount) {
      min = timeCount;
      map[min] = now;
    }
  });
  console.log(map);
  return map[min];
}
function countTime(timeA, timeB) {
  const [hourA, minA] = timeA.split(':');
  const [hourB, minB] = timeB.split(':');
  let res = 0;
  const hour = hourA - hourB;
  const min = minA - minB;
  if (hour > 0) {
    res += hour * 60;
  } else if (hour < 0) {
    res += (24 + hour) * 60;
  } else {
    if (min < 0) {
      res += 24 * 60 + min;
    }
  }
  if (min > 0) {
    res += min;
  } else {
    res += 60 + min;
  }
  return res;
}
