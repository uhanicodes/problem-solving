var largestNumber = function(nums) {
    let numsString = [];
    let largestNumberString = '';

    for (let i = 0; i < nums.length; i++) {
       numsString.push(nums[i].toString());
    }
    
    numsString.sort((a, b) => {

        for (let i = 0; i < Math.min(a.length, b.length); i++) {

            if (a[i] > b[i]) {
                return -1;
            }

            if (a[i] < b[i]) {
                return 1;
            }
        }
                
        return 0;
    })
    
    return numsString;
};

console.log(largestNumber([12,11,12]));

console.log(largestNumber([2346, 7892, 2343, 334]));

console.log(largestNumber([3,30,34,5,9]));