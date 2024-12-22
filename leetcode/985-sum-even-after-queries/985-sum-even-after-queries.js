var sumEvenAfterQueries = function(nums, queries) {
    let sumOfEven = 0;
    let sumOfEvenArray = [];

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < queries.length; j++) {

            if (queries[j][1] == i) {
                nums[i] = nums[i] + queries[j][0];
                
                for (let k = 0; k < nums.length; k++) {
                    
                    if (nums[k] % 2 == 0) {
                        sumOfEven = sumOfEven + nums[i];
                    }
                }
            }
        }
        
        sumOfEvenArray.push(sumOfEven);        
    }
    return sumOfEvenArray;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))