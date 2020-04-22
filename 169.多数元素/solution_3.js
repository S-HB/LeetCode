/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1;
    let cur = nums[0];
    let len = nums.length;
    for (let i = 1; i < len; i++) {
        if (count === 0) {
            cur = nums[i];
        }
        if (cur === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return cur;
};

// 解法：摩尔投票法
// 思路：众数比其他所有数的次数和还多，逐渐消灭不同元素，剩余的就是众数
// 1. 初始化计数count为1，代表当前元素剩余次数
// 2. 初始化当前元素为数组中第一个元素
// 3. 从数组中第二个元素开始遍历，如果和当前元素相等，count加1，不想等，抵消一次当前元素次数，count减1
// 4. 当count为0时，代表其中的众数（如果有）已经和其他不同的元素的次数抵消完
// 5. 重新给当前元素赋值，再经历相互次数抵消，最终剩余的一定是众数

// 扩展知识点

// 摩尔投票：

// 1980 年由 Boyer 和 Moore 两个人提出来的算法，英文是 Boyer-Moore Majority Vote Algorithm。

// 算法思想很简单，但第一个想出来的人是真的强。

// 我们假设这样一个场景，在一个游戏中，分了若干个队伍，有一个队伍的人数超过了半数。所有人的战力都相同，不同队伍的两个人遇到就是同归于尽，同一个队伍的人遇到当然互不伤害。

// 这样经过充分时间的游戏后，最后的结果是确定的，一定是超过半数的那个队伍留在了最后。