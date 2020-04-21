/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        let sum = numbers[i] + numbers[j];
        if (sum < target) {
            i++;
        }
        else if (sum > target) {
            j--;
        }
        else {
            return [i + 1, j + 1];
        }
    }
};

// 思路：对撞指针解法
// 基本原理：利用首尾双指针和有序数组，缩减搜索空间
// 本质详见：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/solution/yi-zhang-tu-gao-su-ni-on-de-shuang-zhi-zhen-jie-fa/
// 1. 初始化首位执政
// 2. 当两数之和小于目标和时，向右移动较小指针
// 3. 当两数之和大雨目标和时，向左移动较大指针
// 4. 当两数之和等于目标和时，返回结果数组
// 时间复杂度O(n)，空间复杂度O(1)