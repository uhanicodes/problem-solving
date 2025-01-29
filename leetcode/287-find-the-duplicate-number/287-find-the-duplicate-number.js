var findDuplicate = function(nums) {
    let x = 0;

    for (let i = x + 1; i < nums.length; i++) {

        if (nums[x] == nums[i]) {
            return nums[i];
        }
        else {
            x++;
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]));

console.log(findDuplicate([3,1,3,4,2]));

console.log(findDuplicate([3,3,3,3,3]));

// console.log(findDuplicate());