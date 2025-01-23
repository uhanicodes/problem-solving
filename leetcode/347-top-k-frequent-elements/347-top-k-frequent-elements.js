// nums = [1,1,1,2,2,3], k = 2; Output: [1,2]
// nums = [1], k = 1; Output: [1]
// nums =[3,0,1,0] k=1;

var topKFrequent = function(nums, k) {
    let charCount = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (!charCount.has(nums[i])) {
            charCount.set(nums[i], 1);
        }
        else {
            charCount.set(nums[i], charCount.get(nums[i]) + 1);
        }
    }
    
    let arr = Array.from(charCount);

    arr.sort((a, b) => b[1] - a[1]);

    let topKFrequentElements = [];

    for (let i = 0; i < k; i++) {
        topKFrequentElements.push(arr[i][0]);
    }

    return topKFrequentElements;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));

console.log(topKFrequent([1], 1));

console.log(topKFrequent([3,0,1,0], 1));

console.log(topKFrequent([1,1,2,2,3,3], 2));