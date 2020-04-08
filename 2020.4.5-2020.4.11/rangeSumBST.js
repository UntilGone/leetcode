/**
 * Range Sum of BST
 * https://leetcode.com/problems/range-sum-of-bst/
 * 给定BST的节点，返回L和R间路径的和
 * @param {TreeNode} root BST的节点
 * @param {number} L 左节点
 * @param {number} R 右节点
 */
// 二叉树
function Tree (val) {
  this.value = val;
  this.left = this.right = null;
}
// BST
function BST (data) {
  const len = data.length;
  let tree;
  for (let i = 0; i < len; i++) {
    const node = new Tree(data[i]);
    if (tree) {
      insertNode(tree, node);
    } else {
      tree = node;
    }
  }
  return tree;
}
// 插入BST节点
const insertNode = (root, node) => {
  if (root.value < node.value) {
    root.right ? insertNode(root.right, node) : root.right = node;
  } else {
    root.left ? insertNode(root.left, node) : root.left = node;
  }
}
const rangeSumBST = function(root, L, R) {
  const tree = new BST(root);
  // 实际上就是遍历一遍
  const count = (node) => {
    if (!node) {
      return 0;
    }
    if (node.value >= L && node.value <= R) {
     return node.value + count(node.left) + count(node.right);
    }
    return count(node.left) + count(node.right);
  }
  return count(tree);
};


console.log(rangeSumBST([10,5,15,3,7,null,18], 7, 15));
/**
 * 这里就要先了解什么是BST 二叉查找树
 * BST满足下面3个条件
 * 如果存在左子树则左子树的子节点一定小于根节点
 * 如果存在柚子树则右子树的子节点一定小于根节点内
 * 任意左右节点都是BST
 */