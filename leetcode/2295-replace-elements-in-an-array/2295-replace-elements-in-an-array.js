var arrayChange = function(nums, operations) {
    let operationsMap = new Map(operations);

    while (operationsMap.size !== 0) {
        
        for (let i = 0; i < nums.length; i++) {
            
            if (operationsMap.has(nums[i])) {
                let key = nums[i];
                nums[i] = operationsMap.get(nums[i]);
                operationsMap.delete(key);
            }
        }
    }

    return nums;
};

console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]])); //output : [3,2,7,1]

console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]));