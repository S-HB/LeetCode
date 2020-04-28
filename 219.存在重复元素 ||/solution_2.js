/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    return false;
};


// 解法：散列表解法
// 思路：利用散列表及滑动窗口
// 1. 初始化一个散列表
// 2. 循环数组，当散列表中没有当前元素，存入散列表
// 3. 判断散列表大小是否超过窗口k，超过则删除最老的元素
// 4. 当散列表中包含当前元素时，返回
// 5. 时间复杂度O(n)，空间复杂度取决于散列表存储的个数，即O(min(n, k))