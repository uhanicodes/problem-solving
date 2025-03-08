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

    constructor() {
        this.front = this.rear = -1;
        this.array = new Array(10);
    }

    enqueue(v) {

        if (this.rear == this.array.length - 1) {
            return;
        }

        if (this.front == -1 && this.rear == -1) {
            this.front = 0;
        }        
        
        this.rear++;
        this.array[this.rear] = v;
    }

    dequeue() {

        if (this.front == -1 && this.rear == -1) {
            return;
        }

        let frontValue = this.array[this.front];
        this.front++;
        
        if (this.front - 1 == this.rear) {
            this.front = this.rear = -1;
        }

        return frontValue;
    }
}

var rotate = function(nums, k) {
    k = k % nums.length;
    let reverseNums = [];

    for (let i = 0; i < nums.length; i++) {
        reverseNums[i] = nums[nums.length -1 - i];
    }

    reverseNums = new Queue();
    let x = 0;

    for (let i = 0; i < k; i++) {
        x = reverseNums[0];
        reverseNums.dequeue();
        reverseNums.enqueue(x);
    }
    return reverseNums;
}
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));
console.log(rotate([1,2], 3));
console.log(rotate([1,2,3],50));

// nums = [1,2,3,4,5,6,7], k = 3
// output: [5,6,7,1,2,3,4]