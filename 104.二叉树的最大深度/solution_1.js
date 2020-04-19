/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};

// 思路：递归DFS（深度优先）解法。
// 基本原理：每个节点的深度 = 它的左右子节点深度的最大值 + 1
// 1. 如果二叉树为空，直接返回深度0
// 2. 递归获取左右子节点深度
// 3. 当前节点深度为左右子节点深度最大值 + 1
// 时间复杂度O(n)，当二叉树完全不平衡时，空间复杂度O(n)；当二叉树完全平衡时，空间复杂度是O(log(n))



