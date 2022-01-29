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

console.log(func([10, 11, 21, 19, 21, 17, 21, 16, 21, 18, 15]));
console.log(func([2, 1, 5, 4, 3, 3, 9, 2, 7, 4, 6, 2, 15, 4, 2, 4]));
console.log(
  func([
    5, 1, 5, 3, 5, 2, 5, 5, 7, 6, 7, 3, 7, 11, 7, 55, 7, 9, 98, 9, 17, 9, 15, 9,
    9, 1, 39,
  ])
);
