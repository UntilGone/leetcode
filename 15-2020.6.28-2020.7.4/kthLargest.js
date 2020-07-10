/**
 * 二叉搜索树第k大节点
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */

 /**
  * 
  * @param {TreeNode} root 二叉搜索树的根节点
  * @param {number} k
  * @returns {number}
  */
const kthLargest = (root, k) => {
  let count = 0;
  let res
  const dfs = (root) => {
    if (!root) {
      return ;
    }
    dfs(root.right);
    count++;
    if (count === k) {
      res = root.val;
      return ;
    }
    dfs(root.left);
  }
  return res;
}

/**
 * 因为树结构比较麻烦就不写测试用例了
 * 这道题考的是二叉搜索树的中序遍历
 * 中序遍历就是左根右的顺序遍历树
 * 中序遍历BST就是递增序列
 * 因为题目是第k大的 也就是要倒序 所以就反着中序遍历 右根左就好了
 * 
 * 先序： root -> left -> right
 * 中序: left-> root -> right
 * 后序: left -> right -> root
 */