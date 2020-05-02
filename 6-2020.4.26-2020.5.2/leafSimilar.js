/**
 * Leaf-Similar Trees
 * https://leetcode.com/problems/leaf-similar-trees/
 * 判断2棵二叉树（先序）是否叶相似
 * 叶相似： 二叉树的子节点序列值相同
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
const createTree = (arr) => {
  let tree;
  const temp = [...arr];
  while(temp.length > 0) {
    const num = temp.shift();
    if (tree) {
      if (num) {

      }
    } else {
      tree = new TreeNode(num);
    }
  }
  return tree;
}
const leafSimilar = (root1, root2) => {
  const first = [];
  const second = [];
  const getLeaf = (root, arr) => {
    if (root) {
      if (root.left === null && root.right === null) {
        arr.push(root.val);
        return ;
      }
      getLeaf(root.left, arr);
      getLeaf(root.right, arr);
    }
  }
  getLeaf(root1, first);
  getLeaf(root2, second);
  return first.join(',') === second.join(',');
}

/**
 * 因为懒得写二叉树的值了 就没有Test 直接LeetCode里验证
 * 这个题的目标应该就是先序遍历所有子节点
 * 然后比较2个树的叶子节点一不一样
 * 当然也考如何比较两个数组相等
 * 我直接通过join比较2个字符串是否相同
 * 本来join是没有加参数的， 后来遇到了 [ 6, 7, 14, 9, 8 ] [ 6, 71, 4, 9, 8 ]的情况
 * 不相同 join后却相同了  所以加了,
 */