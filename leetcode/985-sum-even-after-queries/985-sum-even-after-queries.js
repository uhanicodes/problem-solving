var sumEvenAfterQueries = function(nums, queries) {
    let sumOfEven = 0;
    let sumOfEvenArray = [];

    for (let i = 0; i < queries.length; i++) {

        for (let j = 0; j < nums.length; j++) {

            if (queries[i][1] == j) {
                nums[j] += queries[i][0];
            }

            if (nums[j] % 2 == 0) 
        }
    }
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))