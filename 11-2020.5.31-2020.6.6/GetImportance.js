/**
 * Employee Importance
 * https://leetcode.com/problems/employee-importance/
 * 求员工的重要性
 * 数据结构如下所示Employee
 * 对任意员工[id, importance, [subordinates]]
 * 返回该员工下属所有员工的价值
 */

/**
 * 员工对象
 * @param {string} id 员工的id
 * @param {number} importance 员工的重要性
 * @param {string[]} subordinates 他的下属员工
 */
// 员工对象
function Employee(id, importance, subordinates) {
  this.id = id;
  this.importance = importance;
  this.subordinates = subordinates;
}

// 生成员工列表
const createEmployees = (employees) => {
  const arr = [];
  employees.forEach((val) => {
    arr.push(new Employee(...val));
  })
  return arr;
}

/**
 * @param {Employee[]} employees 员工列表
 * @param {string} id 目标员工
 */
const getImportance = (employees, id) => {
  const employee = employees.find(val => val.id === id);
  if (employee) {
    let subordinateImportance = 0
    employee.subordinates.forEach((val) => {
      subordinateImportance += getImportance(employees, val);
    });
    return employee.importance + subordinateImportance;
  } else {
    return 0;
  }
}

// Test
console.log(getImportance(createEmployees([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]), 1)); // 11
console.log(getImportance(createEmployees([[1,2,[2]], [2,3,[]]]), 2)); // 3

/**
 * 直接用递归就可以解决了
 * 其实这个员工结构就是个树
 * 通过广度有限遍历一遍就好了
 */