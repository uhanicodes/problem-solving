var triangularSum = function(nums) {
    let numsLength = nums.length;
    
    for (let i = 0; i < numsLength - 1; i++) {

        let newNums = [];
        
        if (nums.length > 1) {
            
            for (let j = 0; j < nums.length - 1; j++) {
                newNums.push((nums[j] + nums[j + 1]) % 10);
            }

            nums = newNums;
        }
    }
    
    return nums[0];
};

console.log(triangularSum([1,2,3,4,5]));