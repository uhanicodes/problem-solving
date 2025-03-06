var rotate = function(nums, k) {
    if (k > nums.length) {
        k = k % nums.length;
    }

    let x = [];
    let y = [];

    for (let i = 0; i < nums.length - k; i++) {
        x.push(nums[i]);
        // console.log(x);
    }

    for (let i = nums.length - k; i < nums.length; i++) {
        y.push(nums[i]);
        // console.log(y);
    }

    for (let i = 0; i < k; i++) {
        nums[i] = y[i];
    }

    for (let i = k; i <nums.length; i++) {
        nums[i] = x[i - k];
    }
    
    return nums;
}

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));
console.log(rotate([1,2], 3));
console.log(rotate([1,2,3],50));

// nums = [1,2,3,4,5,6,7], k = 3
// output: [5,6,7,1,2,3,4]