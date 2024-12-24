var sumEvenAfterQueries = function(nums, queries) {
    let sumOfEven = 0;
    let sumOfEvenArray = [];

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] % 2 == 0) {
            sumOfEven += nums[i];
        }
    }

    for (let i = 0; i < queries.length; i++) {

        if (nums[queries[i][1]] % 2 == 0) {
            sumOfEven -= nums[queries[i][1]];
        }

        nums[queries[i][1]] += queries[i][0];

        if (nums[queries[i][1]] % 2 == 0) {
            sumOfEven += nums[queries[i][1]];
        }
        sumOfEvenArray.push(sumOfEven);
    }

    return sumOfEvenArray;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));