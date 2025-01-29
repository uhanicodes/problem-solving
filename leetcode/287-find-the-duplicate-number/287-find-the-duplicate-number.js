var findDuplicate = function(nums) {
    let intCount = new Array(100001);

    for (let i = 0; i < nums.length; i++) {

        if (intCount[nums[i]] == null) {
            intCount[nums[i]] = 1;
        }
        else {
            intCount[nums[i]]++;
        }
    }

    for (let i = 0; i < intCount.length; i++) {

        if (intCount[i] > 1) {
            return i;
        }
    }
};

console.log(findDuplicate([1,3,4,2,2]));

console.log(findDuplicate([3,1,3,4,2]));

console.log(findDuplicate([3,3,3,3,3]));

// console.log(findDuplicate());