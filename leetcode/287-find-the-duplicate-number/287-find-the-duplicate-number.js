var findDuplicate = function(nums) {
    let sortNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]));

console.log(findDuplicate([3,1,3,4,2]));

console.log(findDuplicate([3,3,3,3,3]));

// console.log(findDuplicate());