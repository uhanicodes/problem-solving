var largestNumber = function(nums) {
    let numsString = [];
    let largestNumberString = '';

    for (let i = 0; i < nums.length; i++) {
       numsString.push(nums[i].toString());
    }
    
    numsString.sort((a, b) => {

        for (let i = 0; i < Math.min(a.length, b.length); i++) {

            if (a[i] > b[i]) {
                return -1;
            }

            if (a[i] < b[i]) {
                return 1;
            }
        }

        if ((a.length > b.length) && (a[b.length] > b[b.length -1])) {
            return -1;
        }

        if ((a.length > b.length) && (a[b.length] < b[b.length -1])) {
            return 1;
        }

        if ((a.length < b.length) && (b[a.length] > a[a.length -1])) {
            return 1;
        }
        
        if  ((a.length < b.length) && (b[a.length] < a[a.length -1])) {
            return -1;
        }       
        return 0;
    })
    
    for (let i = 0; i < numsString.length; i++) {
        largestNumberString += numsString[i];
    }

    return largestNumberString;
};

console.log(largestNumber([12,11,12]));

console.log(largestNumber([2346, 7892, 2343, 334]));

console.log(largestNumber([3,30,34,5,9]));

console.log(largestNumber([23, 234135631]));

console.log(largestNumber([231, 23])); // not providing correct output.

console.log(largestNumber([234, 23]));

console.log(largestNumber([233, 23]));

console.log(largestNumber([543, 5435]));

console.log(largestNumber([40, 45, 34, 78, 25, 76, 34]));

// [34323,3432], 
// Output
// "343233432"
// Expected
// "343234323"