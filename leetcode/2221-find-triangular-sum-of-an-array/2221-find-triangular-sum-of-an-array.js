var triangularSum = function(nums) {
    let newNums = nums;

    
    if (newNums.length > 1) {
        
        for (let i = 0; i < newNums.length; i++) {
            newNums.push((newNums[i] + newNums[i + 1]) % 10);
        }
    }
    else {
        return newNums;
    }
    // return newNums;
};

console.log(triangularSum([1,2,3,4,5]));