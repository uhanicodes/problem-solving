// var rotate = function(nums, k) {
//     k = k % nums.length;

//     let x = [];
//     let y = [];

//     for (let i = 0; i < nums.length - k; i++) {
//         x.push(nums[i]);
//         // console.log(x);
//     }

//     for (let i = nums.length - k; i < nums.length; i++) {
//         y.push(nums[i]);
//         // console.log(y);
//     }

//     for (let i = 0; i < k; i++) {
//         nums[i] = y[i];
//     }

//     for (let i = k; i <nums.length; i++) {
//         nums[i] = x[i - k];
//     }
    
//     return nums;
// }

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
        numsQueue.enqueue(nums[i]);
    }
    
    for (let i = 0; i < k; i++) {
        numsQueue.enqueue(numsQueue.dequeue());
    }

    for (let i = 0; i < k; i++) {
        numsQueue.dequeue();
    }

    return numsQueue;
}
console.log(rotate([1,2,3,4,5,6,7], 3));
// console.log(rotate([-1,-100,3,99], 2));
// console.log(rotate([1,2], 3));
// console.log(rotate([1,2,3],50));

// nums = [1,2,3,4,5,6,7], k = 3
// output: [5,6,7,1,2,3,4]