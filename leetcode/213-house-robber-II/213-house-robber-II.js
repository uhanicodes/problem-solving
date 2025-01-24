var rob = function(nums) {
    let maxAmountOfRobbedMoney = 0;
    
    if (nums.length > 3 && nums.length % 2 !== 0) {

        for (let i = 0; i < nums.length; i++) {

            if (i == 0 && i == nums.length - 1){
                continue;
            }
            else if (i % 2 !== 0) {
                maxAmountOfRobbedMoney += nums[i];
            }
        }
    }
    else if (nums.length == 1) {
        return nums[0];
    }
    else if (nums.length == 3) {

        for (let i = 0; i < nums.length; i++) {
            maxAmountOfRobbedMoney = Math.max(nums[i]);
        }
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

console.log(rob([2,3,2])); //output: 8, expected: 3

console.log(rob([1,2,3,1])); // output: 1, expected: 4

console.log(rob([1,2,3])); // output: 8, expected: 3