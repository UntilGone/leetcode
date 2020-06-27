/**
 * 从上到下打印二叉树
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 */


const data = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    }
  }
}
const levelOrder = (root) => {
  if (!root) {
    return [];
  }
  const queue = [root];
  const res = [];
  let level = 0;
  while(queue.length) {
    res[level] = [];
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      res[level].push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return res;
}

console.log(levelOrder(data));