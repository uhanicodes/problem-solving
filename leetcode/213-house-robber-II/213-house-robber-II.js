var rob = function(nums) {
    let maxAmountOfRobbedMoney = 0;
    
    for (let i = 0; i < nums.length; i++) {

        if (nums.length == 1) {
            maxAmountOfRobbedMoney += nums[i];
        }
        else if (nums.length == 2) {
            continue;
        }
        else if (nums.length == 3) {

            if (nums[i + 1] > nums[i]) {
                maxAmountOfRobbedMoney += nums[i + 1];
            }
            else{
                maxAmountOfRobbedMoney += nums[i];
            }
        }
        else if (nums.length % 2 == 0) {
            
            if (i == 0 && i % 2 == 0) {
                maxAmountOfRobbedMoney += nums[i];
            }
        }
        else {

            if (i == 0 && i == nums.length -1) {
                continue;
            }
            else if (i % 2 !== 0) {
                maxAmountOfRobbedMoney += nums[i];
            }
        }
    }

    return maxAmountOfRobbedMoney;
};

console.log(rob([2,3,2])); //output: 8, expected: 3

console.log(rob([1,2,3,1])); // output: 1, expected: 4

console.log(rob([1,2,3])); // output: 8, expected: 3