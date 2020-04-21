/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const arr = this.arr;
    const len = arr.length;
    if (!len) {
        return undefined;
    }
    return arr[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const arr = this.arr;
    const len = arr.length;
    if (!len) {
        return undefined;
    }
    let min = arr[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  TODO: 没有符合题目规范，可以保留为自己的解法，周末补上