/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length;
    let hashMap = {};
    for (let j = 0; j < len; j++) {
        let cur = numbers[j];
        let diff = target - cur;
        if (hashMap[diff] === undefined) {
            hashMap[cur] = j;
        } else {
            return [hashMap[diff] + 1, j + 1];
        }
    }
};

// 思路：哈希解法
// 基本原理：利用哈希表，查找差值是否存在
// 1. 初始化哈希表
// 2. 循环数组，每次取得目标和与当前元素的差值
// 3. 查找哈希表是否存在以差值作为key的值
// 4. 如果没找到，将当前元素作为key，当前索引作为value存入哈希表
// 5. 如果找到，返回结果