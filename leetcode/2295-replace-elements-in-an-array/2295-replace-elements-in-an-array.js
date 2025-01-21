var arrayChange = function(nums, operations) {
    let numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i);
    }

    for (let i = 0; i < operations.length; i++) {
        let x = numsMap.get(operations[i][0]);
        numsMap.set(operations[i][1], x);
        numsMap.delete(operations[i][0]);
    }

    let numsMap2 = new Map();

    for (const entry of numsMap.entries()) {
        numsMap2.set(entry[1], entry[0]);
    }

    let arr = [...numsMap2.entries()].sort();

    return arr.map(x => x[1]);
};

console.log(arrayChange([1,2,4,6], [[1,3],[4,7],[6,1]])); //output : [3,2,7,1]

// console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]));

// console.log(arrayChange([1,2,3,4,5], [[5,7],[4,5],[5,9]]));