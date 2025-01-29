var findDuplicate = function(nums) {
    let sortNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {

        if (sortNums[i] == sortNums[i + 1]) {
            return sortNums[i];
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]));

console.log(findDuplicate([3,1,3,4,2]));

console.log(findDuplicate([3,3,3,3,3]));

// console.log(findDuplicate());