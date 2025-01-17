var arrayChange = function(nums, operations) {
    let operationsMap = new Map(operations);

    for (let i = 0; i < nums.length; i++) {
        
        if (operationsMap.has(nums[i])) {
            nums[i] = operationsMap.get(nums[i]);
        }
    }

    return nums;
};

console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]])); //output : [3,2,7,1]

console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]));