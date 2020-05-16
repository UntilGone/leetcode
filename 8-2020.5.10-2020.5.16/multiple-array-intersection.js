/**
 * 据说是阿里的面试
 * 写个函数，用来计算多个数组的交集
 */

const multipleArrayIntersection = (...arrs) => {
 return Array.from(new Set(arrs.reduce((intersection, currentArr) => {
   console.log('object', intersection, currentArr);
   return currentArr.filter(item => intersection.includes(item));
 })))
}

// Test
console.log(multipleArrayIntersection([1,2,3], [2,3,4], [1,2,3,4])); // [2, 3]