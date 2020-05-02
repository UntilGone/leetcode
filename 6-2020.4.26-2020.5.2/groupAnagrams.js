/**
 * Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * 给一个字符串数组，按照包含的字母分组(不去重)
 * 输出的数组排序不重要
 * @param {string[]} strs 
 */
const groupAnagrams = (strs) => {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
    if (map[key]) {
      map[key].push(strs[i]);
    } else {
      map[key] = [strs[i]]
    }
  }
  const rs = [];
  for(let key in map) {
    rs.push(map[key]);
  }
  return rs;
}

// Test
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

/**
 * 看了最快的提交，看不懂=。=  打扰了
 * 大致意思是先把字符串都转成一个key 然后就是跟我的思路差不多 不过是用Map
 * 但是他这个getKey的方法我就懵了  列了一堆质数 然后把字符串每一位的ASCII码转成了一个唯一的id
 * 道理我懂  这个质数是为啥？  防止id重复？ 好像有点道理
 * 下面贴一下代码
 */

const primes = [2, 3, 5, 7, 11, 13,
  17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61,
  67, 71, 73, 79, 83, 89,
  97, 101];

function getKey(str) {
  let key = 1;
  for(let i = 0; i < str.length; ++i){
    key *= primes[str.charCodeAt(i) - 97];
  }
  return key;
}


function groupAnagrams(strs) {
  const result = new Map();
  for (let i = strs.length-1; i >= 0; --i) {
    const w = strs[i];
    let key = getKey(w);
    if(result.has(key)) {
        result.get(key).push(w);
    } else {
        result.set(key,  [w]);
    }
  }

  return [...result.values()];
};