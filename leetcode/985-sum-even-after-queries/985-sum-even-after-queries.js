var sumEvenAfterQueries = function(nums, queries) {
    let sumOfEven = [];

    for (let i = 0; i < nums.length; i++) {

        for (let k = 0; k < queries.length; k++) {

            if (queries[k][1] == i) {
                nums[i] += queries[k][0];
                sumOfEven.push()
            }
        }
    }
    return nums;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))