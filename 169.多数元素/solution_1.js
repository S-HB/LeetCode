/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    let obj = {};
    let maxIdx = 0;
    for (let i = 0; i < len; i++) {
        let cur = nums[i];
        if (obj[cur] === undefined) {
            obj[cur] = 1;
        } else {
            obj[cur] += 1;
            if (obj[cur] > obj[nums[maxIdx]]) {
                maxIdx = i;
            }
        }
    }
    return nums[maxIdx];
};

// 解法：哈希表计数
// 思路：利用哈希表计每个不同元素的出现次数，用maxIdx存储出现次数最多的元素索引
// 缺点：没利用到题目中大于[n/2]的条件
// 1. 初始化哈希表和maxIdx
// 2. 循环数组，哈希表中没有当前元素，则存入哈希表，次数为1
// 3. 哈希表中有当前元素，当前元素的次数加1
// 4. 如果当前元素的次数 大于 当前出现次数最多元素的次数，更新maxIdx为当前元素索引
// 5. 返回出现次数最多的元素
// 6. 时间复杂度O(n)，空间复杂度O(n)