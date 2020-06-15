/**
 * 二叉搜索树的最近公共祖先
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 * 公共祖先：对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先
 */

interface TreeNode {
  val:number;
  left: TreeNode|null;
  right: TreeNode|null;
}


const data:TreeNode = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    }
  }
};

const lowestCommonAncestor = (root:TreeNode|null, p:number, q:number):number|null => {
  if (!root) {
    return null;
  }
  if (root.val < p && root.val < q) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p && root.val > q) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root.val;
  }
}

// Test
console.log(lowestCommonAncestor(data, 2, 8))


/**
 * 遍历就完事了
 * 搜索二叉树 所以左小右大
 * 不知道为啥LeetCode通过不了
 * 要求返回的是treeNode但是测试输出的是number
 * 我人傻了
 */