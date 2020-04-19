/**
 * @param {number[]} nums 
 * @return {number}
 */

var singleNumber = function (nums) {
    let len = nums.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
        let idx = arr.indexOf(nums[i]);
        if (idx === -1) {
            arr.push(nums[i]);
        }
        else {
            arr.splice(idx, 1);
        }
    }
    return arr[0];
};

// 思路：暴力解法，不考虑时间复杂度 和 空间复杂度。
// 基本原理：数组API（indexOf 和 splice）
// 1. 新开辟一个数组空间
// 2. 循环已知数组，利用indexOf检查当前项是否已经存在
// 3. 若不存在，将当前元素存入新数组中
// 4. 若存在，将新数组中该元素删除
// 5. 最后输出新数组第一项，即为仅出现一次的元素
// 时间复杂度O(n^2)，空间复杂度O(n)