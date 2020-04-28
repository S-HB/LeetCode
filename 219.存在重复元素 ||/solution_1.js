/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    let len = nums.length;
    let r = false;
    for (let i = 0; i < len; i++) {
        if (obj[nums[i]] == null || i - obj[nums[i]] > k) {
            obj[nums[i]] = i;
        }
        else {
            r = true;
            break;
        }
    }
    return r;
};


// 解法：哈希解法
// 思路：利用哈希表存储元素的指针，当相同元素指针相差小于k，返回
// 1. 初始化一个空哈希表
// 2. 循环数组，当数组中没有当前元素或重复元素之间距离大于k，将当前元素存入哈希表，更新值为最新指针
// 3. 当哈希表中有当前元素，返回true
// 6. 时间复杂度O(n)，空间复杂度O(n)