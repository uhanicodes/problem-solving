var triangularSum = function(nums) {
    let newNums = [];
    
    if (nums.length > 1) {
        
        for (let i = 0; i < nums.length - 1; i++) {
            newNums.push((nums[i] + nums[i + 1]) % 10);
        }
    }
    else {
        return newNums;
    }
    
    return newNums;
};

console.log(triangularSum([1,2,3,4,5]));