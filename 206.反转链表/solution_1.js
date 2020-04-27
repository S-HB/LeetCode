/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let p = null;
    let q = head;
    while (q) {
        let z = q.next;
        q.next = p;
        p = q;
        q = z;
    }
    return p;
};

// 解法：双指针解法
// 思路：保存当前元素的next值，修改当前元素的next值
// 1. 初始化指针p为null，指针p为head节点
// 2. 循环链表，声明临时变量保存当前节点的next值
// 3. 更改当前节点的next为前一个节点
// 4. 更新p为当前节点，q为下一个节点
// 5. 循环结束，返回新链表
// 6. 时间复杂度O(n)，空间复杂度O(1)