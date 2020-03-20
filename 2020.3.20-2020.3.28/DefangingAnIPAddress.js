/*
* https://leetcode.com/problems/defanging-an-ip-address/
* 给定一个IPv4的ip地址，返回一个.替换成[.]的ip地址
* 即1.1.1.1 -> 1[.]1[.]1[.]1
*/
const defangIPaddr = (add) => add.replace(/\./g, '[.]');

// 总结
// 这个就非常简单了，就是个就是个替换字符的操作
// 看了耗时比较短的，是通过split和join实现的
// 不是很懂，为啥正则匹配会比数组操作慢,具体代码如下
const defangIPaddrByArrayOperation = (add) => add.split('.').join('[.]');