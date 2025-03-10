class Queue {
    
    constructor () {
        this.array = [];
        this.start = this.end = -1;
    }

    enqueue(v) {

        if (this.start == -1 && this.end == -1) {
            this.start = 0;
        }

        this.end++;
        this.array[this.end] = v;
    }

    dequeue() {
        let firstValue = 0;

        if (this.start !== -1 && this.end !== -1) {
            firstValue = this.array[this.start];
            this.start++;
        }

        if (this.start - 1 == this.end) {
            this.start = -1;
            this.end = -1;
        }

        return firstValue;
    }

    isEmpty() {
        
        if (this.start == -1 && this.end == -1) {
            return true;
        }
        else {
            return false;
        }
    }
}

var rotate = function(nums, k) {
    // k = k % nums.length;
    let numsQueue = new Queue();

    for (let i = 0; i < nums.length; i++) {
        numsQueue.enqueue(nums[nums.length - 1 - i]);
    }
    
    for (let i = 0; i < k; i++) {
        numsQueue.enqueue(numsQueue.dequeue());
    }

    let arr = [];

    for (let i = numsQueue.end; i >= numsQueue.start; i--) {
        arr.push(numsQueue.array[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
    
    return nums;
}