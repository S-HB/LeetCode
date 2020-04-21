/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.min = undefined;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    this.min = this.min !== undefined ? Math.min(this.min, x) : x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
    if (!this.arr.length) {
        this.min = undefined;
        return;
    }
    this.min = Math.min(...this.arr);
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
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  TODO: 利用数组实现最小栈