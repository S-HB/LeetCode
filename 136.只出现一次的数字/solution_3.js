/**
 * @param {number[]} nums 
 * @return {number}
 */

var singleNumber = function (nums) {
    let len = nums.length;
    let obj = {};
    let sumOfObj = 0;
    let sumOfNum = 0;
    for (let i = 0; i < len; i++) {
        let curNum = nums[i];
        if (!obj[curNum]) {
            obj[curNum] = 1;
            sumOfObj += curNum;
        }
        sumOfNum += curNum;
    }
    return 2 * sumOfObj - sumOfNum;
};

// 思路：数学解法。
// 基本原理：2 * (a + b + c) - (a + a + b + b + c) = c
// 1. 创建一个空对象，两个变量
// 2. 循环已知数组，检查该对象中以当前元素为key的value是否存在
// 3. 若不存在，将当前元素作为key、1作为value存入对象中，并且更新sumOfObj
// 4. 无论是否存在，都更新sumOfNum
// 5. 最后利用数学知识，输出仅出现一次的元素
// 时间复杂度O(n)，空间复杂度O(n)