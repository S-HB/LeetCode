/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let s = new ListNode(null);
    s.next = head;
    let p = s;
    let q = s.next;
    while (q) {
        if (q.val === val) {
            p.next = q.next;
        }
        else {
            p = q;
        }
        q = q.next;
    }
    return s.next;
};

// 解法：哨兵解法
// 思路：利用头节点，便于插入、删除
// 1. 初始化一个哨兵节点，值为null，指向head节点
// 2. 声明两个指针p和q，代表前驱节点和当前节点，初始化为头节点和head节点
// 3. 如果当前节点的值等于目标节点值，将前驱节点的next指向当前节点的next
// 4. 如果当前节点的值不等于目标节点的值，使当前节点成为前驱节点
// 5. 更新当前节点为下一个节点
// 6. 返回头节点的next值，即为链表第一个有效节点
// 7. 时间复杂度O(n)，空间复杂度O(1)