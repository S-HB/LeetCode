/**
 * @param {number[]} nums 
 * @return {number}
 */

var singleNumber = function (nums) {
    let len = nums.length;
    let obj = {};
    for (let i = 0; i < len; i++) {
        let curNum = nums[i];
        if (!obj[curNum]) {
            obj[curNum] = 1;
        }
        else {
            delete obj[curNum];
        }
    }
    return Object.keys(obj)[0];
};

// 思路：哈希解法，避免数组每次查找元素是否存在的O(n)时间。
// 基本原理：Object对象的key/value键值对
// 1. 创建一个空对象
// 2. 循环已知数组，检查该对象中以当前元素为key的value是否存在
// 3. 若不存在，将当前元素作为key、1作为value存入对象中
// 4. 若存在，从对象中删除当前元素key
// 5. 最后将对象的key转换为数组，输出新数组第一项，即为仅出现一次的元素
// 时间复杂度O(n)，空间复杂度O(n)