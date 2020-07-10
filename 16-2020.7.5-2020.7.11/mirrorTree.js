/**
 * 二叉树的镜像
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 */
const mirrorTree = (root) => {
  if (!root) {
    return null;
  }
  const tree = new TreeNode(root.val);
  tree.left = mirrorTree(root.right);
  tree.right = mirrorTree(root.left);
  return tree;
}

/**
 * 递归就完事了 easy
 */