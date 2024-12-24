var sumEvenAfterQueries = function(nums, queries) {
    let sumOfEven = 0;
    let sumOfEvenArray = [];

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] % 2 == 0) {
            sumOfEven += nums[i];
        }
    }

    for (let i = 0; i < queries.length; i++) {

        for (let j = 0; j < nums.length; j++) {

            if (queries[i][1] == j) {

                if (nums[j] % 2 == 0) {
                    sumOfEven -= nums[j];
                }

                nums[j] += queries[i][0];

                if (nums[j] % 2 == 0) {
                    sumOfEven += nums[j];
                }
                sumOfEvenArray.push(sumOfEven);
            }
        }
    }

    return sumOfEvenArray;
};

console.log(sumEvenAfterQueries([1], [[4,0]]));