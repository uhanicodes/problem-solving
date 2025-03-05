var rotate = function(nums, k) {
    let reverseNums = [];

    for (let i = 0; i < nums.length; i++) {
        reverseNums[i] = nums[nums.length - 1 - i];
    }

    let x = 0;
    for (let i = 0; i < k; i++) {
        x = reverseNums[0];
        reverseNums.splice(0, 1);
        // console.log(reverseNums);
        reverseNums.push(x);
    }

    let reverseReverseNums = [];
    for (let i = 0; i < reverseNums.length; i++) {
        reverseReverseNums[i] = reverseNums[reverseNums.length -1 - i];
    }
    return reverseReverseNums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));

// nums = [1,2,3,4,5,6,7], k = 3
// output: [5,6,7,1,2,3,4]