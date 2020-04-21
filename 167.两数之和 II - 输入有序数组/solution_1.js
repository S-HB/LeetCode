/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};

// 思路：暴力解法，不考虑时间复杂度和空间复杂度
// 基本原理：for循环
// 1. 双层for循环，找到和等于target的两个索引
// 2. return结束被调函数，返回结果
// 时间复杂度O(n^2)，空间复杂度O(1)