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
    var level = 0;
    if(!root){
        return level;
    }
    var queue = [root];
    while(queue.length){
        var queueLen = queue.length;
        for(let i = 0; i < queueLen; i++){
            var cur = queue.pop();
            cur.left && queue.unshift(cur.left);
            cur.right && queue.unshift(cur.right);
        }
        level++;
    }
    return level;
};

// 思路：迭代BFS（广度优先）解法。
// 基本原理：利用队列，先进先出、后进后出的特点
// 1. 队列初始化为二叉树根节点
// 2. 遍历队列，pop一个节点，并将该节点的左右子节点unshift进队列
// 3. 二叉树深度自增
// 4. 队列中没有节点后，返回二叉树最大深度
// 时间复杂度O(n)，空间复杂度O(n)