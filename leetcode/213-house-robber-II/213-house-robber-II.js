var rob = function(nums) {
    let maxAmountOfRobbedMoney = 0;
    
    if (nums.length > 3 && nums.length % 2 !== 0) {
        let evenSum = 0;
        let oddSum = 0;
        let max = 0;
        let max1 = 0;
        
        for (let i = 0; i < nums.length; i++) {

            if (i % 2 == 0){
                
                if (i == nums.length - 1) {
                    continue;
                }
                else {
                    evenSum += nums[i];
                }
            }
            else if (i % 2 !== 0) {
                oddSum += nums[i];
            }
        }
        
        max = Math.max(evenSum, oddSum);

        let evenSum1 = 0;
        let oddSum1 = 0;
        
        for (let i = nums.length - 1; i > -1; i--) {

            if (i % 2 == 0) {

                if (i == 0) {
                    continue;
                }
                else {
                    evenSum1 += nums[i];
                }
            }
            else if (i % 2 !== 0) {
                oddSum1 += nums[i];
            }
        }
        
        max1 = Math.max(evenSum1, oddSum1);
        
        return Math.max(max, max1);
    }
    else if (nums.length == 1) {
        return nums[0];
    }
    else if (nums.length < 4) {
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            
            if (nums[i] > max) {
                max = nums[i];
            }
        }

        return max;
    }
    else if (nums.length > 3 && nums.length % 2 == 0) {
        let oddSum = 0;
        let evenSum = 0;

        for (let i = 0; i < nums.length; i++) {

            if (i % 2 == 0) {
                evenSum += nums[i];
            }
            else {
                oddSum += nums[i];
            }
        }

        maxAmountOfRobbedMoney = Math.max(evenSum, oddSum);
    }

    return maxAmountOfRobbedMoney;
};

console.log(rob([2,3,2])); //output: 3, expected: 3

console.log(rob([1,2,3,1])); // output: 4, expected: 4

console.log(rob([1,2,3])); // output: 3, expected: 3

console.log(rob([7])); // output: 7, expected:7

console.log(rob([1,2])); // output: 2, expected:2

console.log(rob([3,4,5,2,1,6])); // output: 12, expected: 12

console.log(rob([201,4,5,2,1])); // output: 206, expected:206

console.log(rob([1,3,1,3,100])); // output: , expected: 103