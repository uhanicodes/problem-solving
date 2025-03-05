var rotate = function(nums, k) {
    let x = 0;

    for (let i = 0; i < k; i++) {
        x = nums[nums.length - 1];
        nums.splice(nums.length - 1, 1);
        nums.splice(0, 0, x);
    }
}

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));

// nums = [1,2,3,4,5,6,7], k = 3
// output: [5,6,7,1,2,3,4]