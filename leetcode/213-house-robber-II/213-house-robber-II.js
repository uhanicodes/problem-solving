var rob = function(nums) {
    let maxAmountOfRobbedMoney = 0;
    
    if (nums.length == 1) {
        return nums[0];
    }
    
    if (nums.length < 4) {
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            
            if (nums[i] > max) {
                max = nums[i];
            }
        }

        return max;
    }
    
    if (nums.length % 2 !== 0) {
        let evenSum = 0;
        let oddSum = 0;
        let max = 0;
        
        for (let i = 0; i < nums.length - 1; i++) {

            if (i % 2 == 0){
                evenSum += nums[i];
            }
            else if (i % 2 !== 0) {
                oddSum += nums[i];
            }
        }
        
        max = Math.max(evenSum, oddSum);

        let evenSum1 = 0;
        
        for (let i = nums.length - 1; i > 0; i--) {

            if (i % 2 == 0) {
                evenSum1 += nums[i];
            }
        }
        
        max = Math.max(max, evenSum1);
        
        let max2 = 0;
        
        for (let i = 0; i < nums.length; i++) {
            let x = nums[i];

            for (let j = i + 3; j < nums.length; j+=2) {
                x += nums[j];
            }

            max2 = Math.max(x, max2);
        }
        
        max2 = Math.max(max, max2);

        let max3 = 0;

        for (let i = nums.length - 1; i >= 0; i--) {
            let y = nums[i];

            for (let j = i - 3; j >= 0; j-=2) {
                y += nums[j];
            }

            max3 = Math.max(max3, y);
        }

        return Math.max(max3, max2);
    }
    else {
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

console.log(rob([1,3,1,3,100])); // output:101 , expected: 103