/**
 * 二叉树的最近公共祖先
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 */

const lowestCommonAncestor = (root, p , q) => {
  if (!root || root.val === p || root.val === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }
  return root;
}
