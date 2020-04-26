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
    let arr = [];
    let p = head;
    while (p) {
        if (p.val === val) {
            arr.length && (arr[arr.length - 1].next = p.next);
        }
        else {
            arr.push(p);
        }
        p = p.next;
    }
    arr.length ? head = arr[0] : head = null;
    return head;
};

// 解法：数组解法
// 思路：利用数组存储最终的链表节点
// 1. 初始化一个空数组，一个p指针，最初与head指向相同
// 2. 循环链表，如果当前节点值与目标值相等，将数组中最后一个节点的next指向当前节点的next
// 3. 如果当前节点值与目标值不想等，放入数组
// 4. 更新p指针为下一个节点
// 5. 返回新链表
// 6. 时间复杂度O(n)，空间复杂度O(n)