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
    var stack = [{key: root, val: 1}];
    while(stack.length){
        let cur_obj = stack.pop();
        let cur_node = cur_obj.key;
        if (cur_node) {
            let cur_level = cur_obj.val;
            level = Math.max(level, cur_level);
            cur_node.left && stack.push({key: cur_node.left, val: cur_level + 1});
            cur_node.right && stack.push({key: cur_node.right, val: cur_level + 1});
        }
    }
    return level;
};

// 思路：迭代DFS（深度优先）解法。
// 基本原理：利用栈，后进先出的特点
// 1. 栈初始化为二叉树根节点对象，key为根节点，val为根节点层数
// 2. 从栈中pop出一个节点对象，更新深度为当前节点深度和已知节点深度最大值
// 3. 将当前节点的左右子节点push进栈，子节点层数为当前节点层数加1
// 4. 栈中没有节点后，返回二叉树最大深度
// 时间复杂度O(n)，空间复杂度O(n)