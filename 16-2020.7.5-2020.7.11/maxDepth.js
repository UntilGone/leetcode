/**
 * 二叉树的深度
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 * @param {TreeNode} root
 * @returns {number}
 */
const maxDepth = (root) => {
  if (!root) {
    return 0;
  }
  return Math.max( 1 + maxDepth(root.left), 1 + maxDepth(root.right));
}

/**
 * 递归
 * 看哪边深呗
 */