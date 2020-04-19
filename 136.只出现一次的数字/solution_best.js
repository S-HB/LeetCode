/**
 * @param {number[]} nums 
 * @return {number}
 */

var singleNumber = function (nums) {
    let r = 0;
    for (let i = 0; i < len; i++) {
        r ^= nums[i];
    }
    return r;
};

// 思路：异或运算。
// 基本原理
// a ^ a = 0，a ^ 0 = a，0 ^ a = a，0 ^ 0 = 0
// a ^ (b ^ a) = (a ^ a) ^ b
// 1. 声明一个变量r，初始值为0
// 2. 循环已知数组，使当前元素与r做异或操作，并更新r
// 3. 由于异或满足交换律和结合律，每两个相同的元素异或结果是0
// 4. 0与最后与仅出现一次的元素做异或操作，输出仅出现一次的元素
// 时间复杂度O(n)，空间复杂度O(1)